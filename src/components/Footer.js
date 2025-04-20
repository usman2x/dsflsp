import React from "react";

const Footer = () => (
  <footer className="text-center text-sm text-gray-600 mt-10 p-4 border-t">
    © {new Date().getFullYear()} جميع الحقوق محفوظة. <br />
    <a
      href="https://wa.me/YOUR_DEV_WHATSAPP"
      className="text-secondary"
      target="_blank"
      rel="noreferrer"
    >
      تصميم وتطوير
    </a>
  </footer>
);

export default Footer;
