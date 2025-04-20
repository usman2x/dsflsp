import React from "react";
import features from "../data/northstar.json";

const WhyChooseUs = () => (
  <section className="my-8 p-4 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-bold text-primary mb-4">لماذا نحن؟</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <div key={i} className="bg-white shadow p-4 rounded">
          <h3 className="text-primary font-semibold">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
