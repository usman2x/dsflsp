import React from "react";
import ContactItem from "./ContactItem";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">معلومات الاتصال</h3>
      <div className="space-y-6">
        <ContactItem
          icon={<FaPhone className="text-primary" />}
          bgColor="bg-primary bg-opacity-10"
          title="الهاتف"
          link="tel:+966500000000"
        >
          +966 50 000 0000
        </ContactItem>

        <ContactItem
          icon={<FaWhatsapp className="text-green-600" />}
          bgColor="bg-green-600 bg-opacity-10"
          title="واتساب"
          link="https://wa.me/966500000000"
        >
          +966 50 000 0000
        </ContactItem>

        <ContactItem
          icon={<FaEnvelope className="text-gray-800" />}
          bgColor="bg-gray-800 bg-opacity-10"
          title="البريد الإلكتروني"
          link="mailto:info@electrician.com"
        >
          info@electrician.com
        </ContactItem>

        <ContactItem
          icon={<FaClock className="text-accent" />}
          bgColor="bg-accent bg-opacity-10"
          title="أوقات العمل"
        >
          <>
            <p>من السبت إلى الخميس: 8 صباحاً - 10 مساءً</p>
            <p>الجمعة: 4 مساءً - 10 مساءً</p>
          </>
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInfo;
