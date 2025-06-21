import React from "react";
import { FaPhone } from "react-icons/fa";
import contact from "../data/contact.json";

const PhoneNumber = ({ showIcon = true, label = null, className = "" }) => {
  const phone = contact.phone;

  // Click handler to fire GA event
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "engagement",
        event_label: `Phone Click: ${phone}`,
        value: 1,
      });
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 
        text-white bg-yellow-500 hover:bg-blue-600 
        transition-colors duration-300 
        font-semibold px-4 py-2 rounded-md shadow-sm
        ${className}
      `}
      title="اتصل الآن"
    >
      {showIcon && <FaPhone />}
      {label || phone}
    </a>
  );
};

export default PhoneNumber;
