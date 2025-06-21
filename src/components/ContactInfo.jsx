import React from "react";
import ContactItem from "./ContactItem";
import { FaPhone, FaClock } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import contacts from "../data/contact.json";
import site from "../data/site.json";


const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">معلومات الاتصال</h3>
      <div className="space-y-6">
        <ContactItem
          icon={<FaPhone className="text-primary" />}
          bgColor="bg-primary bg-opacity-10"
          title="الهاتف"
          link={`tel:+${contacts.phone}`}
        >
         {contacts.phone}
        </ContactItem>

        <ContactItem
          icon={<FaWhatsapp className="text-green-600" />}
          bgColor="bg-green-600 bg-opacity-10"
          title="واتساب"
          link={`https://wa.me/${contacts.whatsapp}`}
        >
          {contacts.whatsapp}
        </ContactItem>

        <ContactItem
          icon={<FaClock className="text-accent" />}
          bgColor="bg-accent bg-opacity-10"
          title="أوقات العمل"
        >
          <>
            <p>{site.workingHours.saturdayToThursday}</p>
            <p>{site.workingHours.friday}</p>
          </>
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInfo;
