import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../data/services.json";
import contacts from "../data/contact.json";

// Map contacts to services
const servicesWithContacts = services.map((service, index) => ({
  ...service,
  phone: contacts.phone,
  whatsapp: contacts.whatsapp,
}));


const ServiceList = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            خدماتنا المتخصصة
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithContacts.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
