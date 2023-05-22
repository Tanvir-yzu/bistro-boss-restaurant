import React from "react";
import { Outlet } from "react-router-dom";
import NavBer from "../pages/NavBer";
import Footer from "../pages/Footer";

const Main = () => {
  return (
    <div>
      <NavBer></NavBer>
      <div className="min-h-[calc(100vh-325px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
