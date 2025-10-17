import React from "react";
import { NavLink } from "react-router";
import userImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="max-w-11/12 mx-auto text-center md:flex justify-between items-center mt-4">
      <div></div>
      <nav className=" flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </nav>
      <div className="flex gap-4">
        <img src={userImg} alt="" />
        <button className="primary text-white/80 px-8 py-1.5">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
