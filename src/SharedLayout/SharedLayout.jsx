import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";

export const SharedLayout = () => {
  return (
    <div className="bg">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
