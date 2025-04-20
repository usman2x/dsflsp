import React from "react";
import services from "../data/services.json";
import contact from "../data/contact.json";

const Slider = () => (
  <div className="grid md:grid-cols-2 gap-6 my-6">
    {services.map((srv, i) => (
      <div key={i} className="relative bg-white shadow rounded-lg p-4 text-center">
        <h3 className="text-primary text-lg font-bold mb-2">{srv.title}</h3>
        <p>{srv.description}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={`tel:+${contact.phone}`} className="bg-primary text-white py-2 px-4 rounded">اتصال</a>
          <a href={`https://wa.me/${contact.whatsapp}`} className="bg-green-500 text-white py-2 px-4 rounded">واتساب</a>
        </div>
      </div>
    ))}
  </div>
);

export default Slider;
