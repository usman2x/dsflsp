import React from "react";
import services from "../data/services.json";

const Services = () => (
  <section className="my-8">
    {services.map((srv, i) => (
      <div key={i} className="bg-white p-4 rounded-xl shadow my-4">
        <h2 className="text-lg font-bold text-primary">{srv.title}</h2>
        <p>{srv.description}</p>
        <ul className="list-disc pr-5">
          {srv.issues.map((issue, idx) => (
            <li key={idx}>{issue}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Services;
