import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
