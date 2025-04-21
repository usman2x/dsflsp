import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ServiceCard = ({ title, description, image, whatsapp, phone }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition duration-300 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        
        {/* Fixed height or min-height for consistent layout */}
        <p className="text-gray-600 mb-4 min-h-[72px]">{description}</p>

        <div className="mt-auto flex justify-between">
          <a
            href={`https://wa.me/${whatsapp}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
          >
            <FaWhatsapp /> واتساب
          </a>
          <a
            href={`tel:${phone}`}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
          >
            <FaPhone /> اتصل
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
