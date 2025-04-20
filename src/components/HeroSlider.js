import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a10b1?auto=format&fit=crop&w=1470&q=80",
    heading: "صيانة الغسالات الأوتوماتيكية",
    text: "إصلاح جميع أنواع الأعطال مع ضمان على قطع الغيار والعمل",
  },
  {
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=1470&q=80",
    heading: "صيانة الثلاجات والمجمدات",
    text: "حلول سريعة لأعطال التبريد مع ضمان على العمل",
  },
  {
    image: "https://images.unsplash.com/photo-1545165375-6156179d864a?auto=format&fit=crop&w=1470&q=80",
    heading: "صيانة المكيفات بكافة أنواعها",
    text: "خدمة فورية لجميع أعطال التكييف مع ضمان ممتاز",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={slide.image} alt={slide.heading} className="w-full h-[80vh] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="https://wa.me/966500000000"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                  >
                    <FaWhatsapp /> واتساب
                  </a>
                  <a
                    href="tel:+966500000000"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                  >
                    <FaPhone /> اتصل الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-white" : "bg-white bg-opacity-50"
            } hover:bg-opacity-80 transition`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
