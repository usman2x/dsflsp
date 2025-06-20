import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import contacts from "../data/contact.json";
import heroData from "../data/hero.json";

const Hero = () => {
    const { phone, whatsapp } = contacts;
    const { heading, sub_heading, cta_text, image } = heroData;

    return (
        <section
            className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
            aria-label={heading}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 text-center text-white max-w-2xl px-4">

                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white text-shadow">
                    {heading}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium mb-3 text-gray-200 text-shadow-sm">
                    {sub_heading}
                </h2>
                <p className="text-sm md:text-base text-gray-300 mb-6">
                    {cta_text}
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    >
                        <FaWhatsapp /> واتساب
                    </a>
                    <a
                        href={`tel:${phone}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    >
                        <FaPhone /> اتصل الآن
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
