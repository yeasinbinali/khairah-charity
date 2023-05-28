import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../contexts/UserContext";
import img from "../../images/login&signup.svg";

const Login = () => {

  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const valued = event.target;
    const email = valued.email.value;
    const password = valued.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://khairah-charity-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success('Login successfully!');
            localStorage.setItem("khairah-charity", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
      <div className="hero">
        <div className="hero-content md:flex justify-between block">
          <div className="md:w-96 w-80 mx-auto mt-5">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <h1
              className='text-2xl'
                style={{
                  textAlign:'center',
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
              >
                <span style={{ color: "black", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Login", "SignIn"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className='text-center'>New to Khairah Charity? <Link className='font-bold' to='/signup'>Signup</Link></p>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
