import React, { useContext } from 'react';
import img1 from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                  displayName: name,
                })
                  .then(() => {
                    // Send verification email
                    sendEmailVerification(user)
                      .then(() => {
                        toast.success(
                          "Verification email sent! Please check your inbox."
                        );
                      })
                      .catch((error) => {
                        console.error(
                          "Error sending verification email:",
                          error
                        );
                      });

                    toast.success(
                      "Successfully signed up and profile updated!"
                    );
                  })
                  .catch((error) => {
                    console.error("Error updating profile:", error);
                  });

                toast.success("Successfully Sign Up")
                form.reset();
            }).catch(error => {
            console.log(error)
        })
    }
    return (
      <div className="hero my-3 ">
        <div className="hero-content flex-col lg:flex-row space-x-5">
          <div className="text-center lg:text-left">
            <img src={img1} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignUp}>
              <h1 className="text-3xl font-bold">Login Sing up!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>

            <p className="text-center my-3 mx-auto">
              Have an account
              <Link className="text-error font-bold" to="/login">  Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;