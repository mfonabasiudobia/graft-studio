import React from "react";
import WorkWithUs from "@/views/home/work-with-us/WorkWithUs";
import NextProject from "./next-project/NextProject";
import Recommendation from "@/views/blog/recommendation/Recommendation";
import { TextField, Box, Container, Image, Button } from "@/components/common";
import Layout from "@/components/globals/Layout";
import { BsArrowRight } from "react-icons/bs";
import ProjectOverview from "./project-overview/ProjectOverview";

const Project = () => {
  return (
    <Layout
      height="min-h-[70vh] md:min-h-[80vh]"
      scrollTitle="Explore More"
      backgroundImage="/images/case-study/image8.png"
      title={
        <Box>
          <TextField
            component={"p"}
            variant="subtitle1"
            text="Case Study | Intelligent Change"
          />
          <TextField
            component={"h1"}
            variant="title"
            text="A sophisticated <i>e-commerce</i> and <i>migration</i> to Shopify 2.0 for Intelligent Change"
          />
        </Box>
      }
    >
      <ProjectOverview />

      <Container variant={"fluid"} className="py-16" spacingY={10}>
        <Image
          variant={"square"}
          alt={""}
          src={"/images/case-study/image9.png"}
          className="w-full"
          fill={false}
        />

        <TextField component={"p"} className="md:w-1/2 lg:w-1/3">
          The dolor sit amet consectetur. Ornare lectus quis commodo quisque
          amet quis sed eu. Mauris tellus placerat tellus and placerat. Libero
          pharetra egestas elit pellentesque the new nisl praesent at. Velit vel
          egestas ultricies egestas.
        </TextField>
      </Container>

      <Container variant={"fluid"} className="grid md:grid-cols-2 gap-10 py-16">
        <Box>
          <Image
            variant={"square"}
            alt={""}
            src={"/images/case-study/image10.png"}
            className="w-full"
            fill={false}
          />
        </Box>
        <Box>
          <Image
            variant={"square"}
            alt={""}
            src={"/images/case-study/image11.png"}
            className="w-full md:h-[80vh]"
            fill={false}
          />
        </Box>
      </Container>

      <Container variant={"fluid"} className="py-16" spacingY={10}>
        <Image
          variant={"square"}
          alt={""}
          src={"/images/case-study/image12.png"}
          className="w-full"
          fill={false}
        />

        <Box className="flex md:justify-end">
          <TextField component={"p"} className="md:w-1/2 lg:w-1/3">
            The dolor sit amet consectetur. Ornare lectus quis commodo quisque
            amet quis sed eu. Mauris tellus placerat tellus and placerat. Libero
            pharetra egestas elit pellentesque the new nisl praesent at. Velit
            vel egestas ultricies egestas.
          </TextField>
        </Box>
      </Container>

      <Container variant={"fluid"} className="grid md:grid-cols-2 gap-10 py-16">
        <Box>
          <Image
            variant={"square"}
            alt={""}
            src={"/images/case-study/image13.png"}
            className="w-full md:h-[80vh]"
            fill={false}
          />
        </Box>
        <Box className="flex justify-start items-start">
          <Image
            variant={"square"}
            alt={""}
            src={"/images/case-study/image14.png"}
            className="w-full"
            fill={false}
          />
        </Box>
      </Container>

      <Container variant={"fluid"} className="py-16" spacingY={20}>
        <Image
          variant={"square"}
          alt={""}
          src={"/images/case-study/image15.png"}
          className="w-full"
          fill={false}
        />

        <TextField component={"p"} className="md:w-1/2" variant="title">
          “The project lorem ipsum dolor sit amet consectetur. Ornare lectus
          quis commodo quisque amet quis sed eu. Mauris tellus placerat tellus
          placerat pharetra egestas elit pellentesque”
        </TextField>
        <Box spacingY={1}>
          <TextField
            component={"h3"}
            variant="subtitle1"
            text="name lastname"
            className="uppercase"
          />
          <TextField
            component={"h3"}
            variant="subtitle2"
            text="E-Commerce Consultant"
          />
        </Box>
      </Container>

      <WorkWithUs />
      <NextProject />
    </Layout>
  );
};

export default Project;
