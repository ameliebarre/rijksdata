import { Outlet } from "react-router-dom";

import { Header } from "@/components";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
