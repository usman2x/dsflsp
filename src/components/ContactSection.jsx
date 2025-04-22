import React from "react";
import ContactInfo from "./ContactInfo";
import contacts from "../data/contact.json";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <div className="bg-white p-1 rounded-xl shadow-md overflow-hidden">
            <iframe
              src={contacts.locationEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
