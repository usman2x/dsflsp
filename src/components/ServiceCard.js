import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ServiceCard = ({ title, description, image, whatsapp, phone, issues = [] }) => {
  return (
    <article
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition duration-300 flex flex-col"
      aria-label={title}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {issues.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {issues.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex justify-between">
          <a
            href={`https://wa.me/${whatsapp}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
            aria-label={`تواصل عبر واتساب بخصوص ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> واتساب
          </a>

          <a
            href={`tel:${phone}`}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
            aria-label={`اتصل الآن بخصوص ${title}`}
          >
            <FaPhone /> اتصل
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
