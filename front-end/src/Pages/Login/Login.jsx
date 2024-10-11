import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const { SignInUser, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SignInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;

        if (loggedInUser.emailVerified) {
          toast.success("Successfully logged in!");
          // Redirect or perform actions after successful login

        
          // get access token
          const user = { email };
          axios
            .post("http://localhost:5000/jwt", user)
            .then((res) => console.log(res.data));

          // navigate(location?.state? location?.state:'/')
        } else {
          toast.error("Please verify your email before logging in.");
        }
        form.reset();
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Login failed. Please check your credentials.");
      });
  };
  return (
    <div className="hero my-3 ">
      <div className="hero-content flex-col lg:flex-row space-x-5">
        <div className="text-center lg:text-left">
          <img src={img1} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="text-center my-3 mx-auto">
            New to Car Doctor{" "}
            <Link className="text-error font-bold" to="/signup">
              Please Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
