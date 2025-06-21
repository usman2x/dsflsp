import React, { useState, useEffect } from "react";
import site from "../data/site.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
    { id: "why-us", label: "لماذا نحن" },
    { id: "contact", label: "اتصل بنا" },
  ];

  // Track current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, offset: el.offsetTop } : null;
      }).filter(Boolean);

      const scrollPos = window.scrollY + 100;
      const current = offsets.findLast(({ offset }) => scrollPos >= offset);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" dir="rtl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Site Title (logo-style) */}
        <a
          href="/"
          className="text-xl font-extrabold text-blue-600 hover:opacity-90 transition duration-200"
        >
          {site.businessName}
        </a>

        {/* Mobile menu toggle */}
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

        {/* Nav Links */}
        <nav className={`${isOpen ? "block" : "hidden"} md:flex md:items-center gap-4`}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block md:inline-block py-2 px-4 transition font-medium ${
                activeSection === section.id
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Close Menu (mobile) */}
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
