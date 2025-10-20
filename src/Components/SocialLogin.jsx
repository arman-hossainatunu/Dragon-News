import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Firebase.config";

const googleProvider = new GoogleAuthProvider();

const SocialLogin = () => {
  const [user, setUser] = useState(null);
  const handelGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p>Login with</p>
      <div className=" flex flex-col gap-3 mt-3">
        <button onClick={handelGoogle} className="btn btn-outline ">
          <FcGoogle className="text-2xl" />
          Google
        </button>
        <button className="btn btn-outline">
          <FaGithub className="text-2xl" />
          Github
        </button>
      </div>
      {user && (
        <div className="mt-5 text-center">
          <img
            src={user.photoURL}
            alt="User"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="font-bold text-lg mt-2">{user.displayName}</h2>
          <p>{user.email}</p>
          <button  className="btn btn-error mt-3">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
