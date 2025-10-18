import React from "react";
import Header from "../Components/Header/Header";
import LatesNews from "../Components/LatesNews";
import Navbar from "../Components/Header/Navbar";
import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <section>
        <LatesNews></LatesNews>
      </section>
      <section>
        <Navbar></Navbar>
      </section>
      <div className="max-w-11/12 mx-auto grid grid-cols-12 mt-5 gap-3">
        <div className="grid col-span-3">
          <LeftAside></LeftAside>
        </div>
        <div className="grid col-span-6">
          <Outlet></Outlet>
        </div>
        <div className="grid col-span-3">
          <RightAside></RightAside>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
