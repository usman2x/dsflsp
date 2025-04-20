import React from "react";
import contact from "../data/contact.json";

const ContactUs = () => (
  <section className="p-6 bg-white rounded shadow my-6 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-primary mb-4">اتصل بنا</h2>
    <p className="mb-2">رقم الهاتف: <a href={`tel:+${contact.phone}`} className="text-secondary">{contact.phone}</a></p>
    <p className="mb-4">واتساب: <a href={`https://wa.me/${contact.whatsapp}`} className="text-green-600">{contact.whatsapp}</a></p>
    <iframe
      className="w-full h-64 rounded"
      src={contact.locationEmbed}
      allowFullScreen
      loading="lazy"
      title="خريطة"
    ></iframe>
  </section>
);

export default ContactUs;
