import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../Firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email?.value;
    const password = form.password?.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success("Login is done");
      })
      .catch((error) => console.log(error));
  };
  const handelSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
        toast.success("Login is done");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="hero min-h-[calc(100vh-80px)]">
        {user ? (
          <div className="text-center bg-amber-100 border p-5">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img
                  className="mx-auto"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                />
              </div>
            </div>
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
            <button onClick={handelSignOut} className="btn">
              Sign Out{" "}
            </button>
          </div>
        ) : (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center pt-4 font-bold mb-10">
              Login your account
            </h1>
            <hr className="w-[90%] mx-auto" />
            <div className="card-body">
              <form onSubmit={handelLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
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
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p>
                Dont’t Have An Account ?{" "}
                <Link className="text-red-400" to={"/auth/register"}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
