import React from "react";
import { FaBolt, FaShieldAlt, FaHeadset, FaHistory } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-primary text-2xl" />,
    title: "خدمة سريعة",
    description: "وصول سريع خلال ساعتين في معظم المناطق، مع حلول فورية لأعطال الأجهزة الكهربائية.",
    bg: "bg-primary bg-opacity-10",
  },
  {
    icon: <FaShieldAlt className="text-secondary text-2xl" />,
    title: "أفضل ضمان",
    description: "ضمان ممتاز على قطع الغيار والعمل يصل إلى سنة كاملة حسب نوع الصيانة.",
    bg: "bg-secondary bg-opacity-10",
  },
  {
    icon: <FaHeadset className="text-accent text-2xl" />,
    title: "متاح على الهاتف",
    description: "خدمة عملاء متاحة 24/7 للرد على استفساراتكم وتحديد مواعيد الصيانة.",
    bg: "bg-accent bg-opacity-10",
  },
  {
    icon: <FaHistory className="text-primary text-2xl" />,
    title: "خبرة طويلة",
    description: "أكثر من 15 عاماً من الخبرة في صيانة الأجهزة الكهربائية بجميع أنواعها.",
    bg: "bg-primary bg-opacity-10",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className={`${feature.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
