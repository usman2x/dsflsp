import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }) => {
  return (
    <div className="font-tajawal">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
);
};

export default Layout;
