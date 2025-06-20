import React from "react";
import { FaBolt, FaShieldAlt, FaHeadset, FaHistory } from "react-icons/fa";
import features from "../data/features.json";

const iconMap = {
  FaBolt: FaBolt,
  FaShieldAlt: FaShieldAlt,
  FaHeadset: FaHeadset,
  FaHistory: FaHistory,
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 bg-gray-100" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            لماذا تختارنا؟
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || FaBolt;

            return (
              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                aria-label={feature.title}
              >
                <div className={`${feature.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-primary text-2xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
