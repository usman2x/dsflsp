import React, { useState } from "react";
import site from "../data/site.json";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
    { id: "why-us", label: "لماذا نحن" },
    { id: "contact", label: "اتصل بنا" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" dir="rtl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Site Title on Right */}

        <div className="text-xl font-arabic text-blue-600">{site.businessName}</div>

        {/* Hamburger - Only visible when menu is closed on mobile */}
        <div className="md:hidden">
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-600 text-2xl focus:outline-none"
              aria-label="Open Menu"
            >
              ☰
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center gap-4`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block md:inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)} // Auto-close on mobile click
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Close button inside menu (mobile only) */}
        {isOpen && (
          <div className="md:hidden absolute top-4 left-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 text-2xl focus:outline-none"
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
