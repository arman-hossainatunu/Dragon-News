import React from "react";
import Navbar from "./Navbar";
import logo from "../../assets/logo.png";
import { format } from "date-and-time";

const Header = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <img src={logo} alt="" className="w-[470px] mx-auto" />
        <p className="base-100 ">Journalism Without Fear or Favour</p>
        <p className="base-200">{format(new Date(), "dddd, MMMM DD ,YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
