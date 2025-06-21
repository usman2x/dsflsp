import React from "react";
import companies from "../data/companies.json";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  return (
    <section className="py-16 bg-white" id="companies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">شركات عملنا معها</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 px-2 justify-center">
          {companies.map((company, idx) => (
            <CompanyCard key={idx} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyList;
