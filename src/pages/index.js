import React from "react";
import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import FloatingButtons from "../components/FloatingButtons";
import HeroSlider from "../components/HeroSlider";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";





export default function HomePage() {
  return (
    <Layout>
      <HeroSlider/>
      <ServiceList/>
      <WhyUs/>
      <ContactSection/>
    </Layout>
  );
}
