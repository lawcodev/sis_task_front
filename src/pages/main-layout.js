import React from "react";
import { Navbar } from "../components/organism";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container-sm">{children}</div>
    </>
  );
}
