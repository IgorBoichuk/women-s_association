import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import style from "./SharedLayout.module.scss";

export const SharedLayout = () => {
  return (
    <div className={style.sharedLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
