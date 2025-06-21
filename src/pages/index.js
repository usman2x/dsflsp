import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";
import PhoneNumber from "../components/PhoneNumber";
import CompanyList from "../components/CompanyList";

export default function HomePage() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhoneNumber className="my-3" />
        </div>
        <ServiceList />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhoneNumber className="my-3" />
        </div>
        <WhyUs /> 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhoneNumber className="my-3" />
        </div>
        <CompanyList/>
        <ContactSection />
      </Layout>
    </>
  );
}
