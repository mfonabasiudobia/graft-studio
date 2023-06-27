import React from "react";
import WorkWithUs from "./work-with-us/WorkWithUs";
import Partners from "./partners/Partners";
import OurServices from "./our-services/OurServices";
import CaseStudy from "./case-study/CaseStudy";
import OurApproach from "./our-approach//OurApproach";
import Layout from "@/components/globals/Layout";

const Home = () => {
  return (
    <Layout
      height="min-h-[70vh] md:min-h-[80vh]"
      backgroundImage="images/case-study/image2.png"
      scrollTitle="Scroll Down"
      title="Powering successful eCommerce experiences with Shopify."
    >
      <OurApproach />
      <CaseStudy />
      <OurServices />
      <Partners />
      <WorkWithUs />
    </Layout>
  );
};

export default Home;
