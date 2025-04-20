import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "صيانة الغسالات الأوتوماتيكية",
    description:
      "نقدم خدمة صيانة متكاملة للغسالات الأوتوماتيكية بجميع أنواعها...",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a10b1?auto=format&fit=crop&w=1470&q=80",
    whatsapp: "966500000000",
    phone: "+966500000000",
  },
  {
    title: "صيانة الثلاجات والمجمدات",
    description:
      "إصلاح أعطال الثلاجات والمجمدات بجميع أنواعها، مع ضمان على التبريد...",
    image:
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=1470&q=80",
    whatsapp: "966500000000",
    phone: "+966500000000",
  },
  // Add the rest of your 4 services here...
];

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
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
