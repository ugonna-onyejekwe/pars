import React from "react";
import { Outlet } from "react-router-dom";

const PlainDefaultLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PlainDefaultLayout;
