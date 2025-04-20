import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

const Layout = ({ children }) => {
  return (
    <div className="font-tajawal">
      <Header />
      <main>{children}</main>
      <Footer />
      <CallToAction />
    </div>
  );
};

export default Layout;
