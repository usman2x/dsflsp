import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import slides from "../data/slides.json";
import contacts from "../data/contact.json";

// Merge contact info into slides
const slidesWithContacts = slides.map((slide) => ({
  ...slide,
  phone: contacts.phone,
  whatsapp: contacts.whatsapp,
}));

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesWithContacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === slidesWithContacts.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slidesWithContacts.length - 1 : prev - 1
    );

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative w-full overflow-hidden" aria-label="عرض الخدمات">
      <div className="relative h-[80vh]">
        {slidesWithContacts.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            role="group"
            aria-roledescription="شريحة"
            aria-hidden={currentSlide !== index}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-xl">
                {index === 0 ? (
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.heading}
                  </h1>
                ) : (
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {slide.heading}
                  </h2>
                )}
                <p className="text-lg md:text-xl mb-6">{slide.sub_heading}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={`https://wa.me/${slide.whatsapp}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    aria-label="تواصل عبر واتساب"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> واتساب
                  </a>
                  <a
                    href={`tel:${slide.phone}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    aria-label="اتصل الآن"
                  >
                    <FaPhone /> اتصل الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md z-30"
        aria-label="التالي"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md z-30"
        aria-label="السابق"
      >
        <FaChevronLeft />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slidesWithContacts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === idx ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`انتقل إلى الشريحة ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
