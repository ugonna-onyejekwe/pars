import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const SecondaryLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-[90px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SecondaryLayout;
