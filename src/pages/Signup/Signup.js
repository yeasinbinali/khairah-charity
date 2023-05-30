import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import img from "../../images/login&signup.svg";
import { Typewriter } from "react-simple-typewriter";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const valued = event.target;
    const email = valued.email.value;
    const password = valued.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("https://khairah-charity-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("User created successfully!");
            localStorage.setItem("khairah-charity", data.token);
            navigate('/');
          });
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
          <form
            onSubmit={handleSubmitForm}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
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
                    words={["Signup", "Create an account"]}
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
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
                <button className="btn btn-primary">Signup</button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Signup;
