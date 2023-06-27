import React from "react";
import Partners from "@/views/home/partners/Partners";
import Projects from "./projects/Projects";
import WorkWithUs from "@/views/home/work-with-us/WorkWithUs";
import { Container } from "@/components/common";
import Layout from "@/components/globals/Layout";

const CaseStudy = () => {
  return (
    <Layout
      height="min-h-[50vh]"
      scrollTitle="Explore projects"
      title={
        "The ipsum dolor sit amet consectetur. Vel enim est tellus quis. Elementum quis enim facilisis eu."
      }
    >
      <Projects />
      <Partners />
      <WorkWithUs />
    </Layout>
  );
};

export default CaseStudy;
