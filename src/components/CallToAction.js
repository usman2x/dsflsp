import React from "react";
import contact from "../data/contact.json";

const CallToAction = () => (
  <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-20">
    <a href={`tel:+${contact.phone}`} className="bg-primary text-white p-3 rounded-full shadow-lg">📞</a>
    <a href={`https://wa.me/${contact.whatsapp}`} className="bg-green-500 text-white p-3 rounded-full shadow-lg">💬</a>
  </div>
);

export default CallToAction;
