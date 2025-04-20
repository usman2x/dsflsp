import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import ServiceList from "../components/ServiceList";
import FloatingButtons from "../components/FloatingButtons";
import HeroSlider from "../components/HeroSlider";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";





export default function HomePage() {
  return (
    <Layout>
      <HeroSlider/>
      <Slider />
      <ServiceList/>
      <Services />
      <WhyUs/>
      <WhyChooseUs />
      <ContactUs />
      <ContactSection/>
      <FloatingButtons/>
    </Layout>
  );
}
