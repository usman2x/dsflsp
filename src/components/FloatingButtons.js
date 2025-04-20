import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/966500000000"
        className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-700 transition"
        aria-label="Whatsapp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+966500000000"
        className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 transition"
        aria-label="Phone"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default FloatingButtons;
