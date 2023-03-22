import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import img from "../../images/login&signup.svg";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const valued = event.target;
    const email = valued.email.value;
    const password = valued.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(user);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess('');
      });
  };
  return (
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
              <span>Create User Successfully!!</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
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
              <h1 className="text-4xl font-bold text-center">Signup</h1>
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
                  type="text"
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
                  type="text"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
