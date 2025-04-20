import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
    { id: "why-us", label: "لماذا نحن" },
    { id: "contact", label: "اتصل بنا" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          أخصائي صيانة المدينة
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <nav
          className={`md:flex md:items-center space-x-6 md:space-x-reverse rtl ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block md:inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-medium"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
