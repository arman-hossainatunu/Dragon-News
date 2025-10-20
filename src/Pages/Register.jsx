import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState(false);

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name?.value;
    const photoURL = form.photo?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    console.log("click hear Register", {
      displayName,
      photoURL,
      email,
      password,
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName,
          photoURL,
        })
          .then((result) => {
            console.log(result);
            toast.success("Register is done");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        console.log(error.code);
      });
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="hero min-h-[calc(100vh-80px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center pt-4 font-bold mb-10">
            Register your account
          </h1>
          <hr className="w-[90%] mx-auto" />
          <div className="card-body">
            <form onSubmit={handelRegister}>
              <fieldset className="fieldset">
                <div>
                  <label className="label font-bold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="label font-bold">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    required
                    className="input"
                    placeholder="Enter Photo URL"
                  />
                </div>
                <div>
                  <label className="label font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="relative">
                  <label className="label font-bold">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    required
                    className="input"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute cursor-pointer top-[32px] right-7 z-10"
                  >
                    {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
