import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import SEO from "./SEO";


const Layout = ({ children }) => {
  return (
    <div className="font-tajawal">
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
);
};

export default Layout;
