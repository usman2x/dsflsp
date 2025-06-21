import React from "react";

const CompanyCard = ({ name, name_ar, image }) => {
return (
    <article
        className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition duration-300 flex flex-col items-center justify-center w-48 min-w-48 py-6 px-4"
        aria-label={name}
    >
        <img
            src={image}
            alt={name}
            className="w-32 h-32 object-contain mb-3"
        />
        <span className="text-base font-semibold text-gray-700">{name_ar}</span>
    </article>
);
};

export default CompanyCard;
