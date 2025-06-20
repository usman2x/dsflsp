import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceList from "../components/ServiceList";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <ServiceList />
        <WhyUs />
        <ContactSection />
      </Layout>
    </>
  );
}
