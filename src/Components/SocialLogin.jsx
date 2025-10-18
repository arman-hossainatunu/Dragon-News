import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <p>Login with</p>
      <div className=" flex flex-col gap-3 mt-3">
        <button className="btn btn-outline ">
          {" "}
          <FcGoogle className="text-2xl" />
          Google
        </button>
        <button className="btn btn-outline">
          {" "}
          <FaGithub className="text-2xl" />
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
