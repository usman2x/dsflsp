import React from "react";

const ContactItem = ({ icon, bgColor, title, children, link }) => {
  return (
    <div className="flex items-start gap-4">
      <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mt-1`}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        {link ? (
          <a
            href={link}
            className="text-gray-600 hover:text-primary hover:font-bold hover:text-lg"
          >
            {children}
          </a>
        ) : (
          <div className="text-gray-600">{children}</div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
