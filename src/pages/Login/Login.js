import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../contexts/UserContext";
import img from "../../images/login&signup.svg";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
            localStorage.setItem("khairah-charity", data.token);
          });

        setSuccess(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };
  return (
    <div>
      <div>
        {/* error message */}
        <div className="w-1/3 mx-auto">
          {error ? (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* success message */}
        <div className="w-1/3 mx-auto">
          {success ? (
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>User Login Successfully!!</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
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
    </div>
  );
};

export default Login;
