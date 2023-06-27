import React from "react";
import WorkWithUs from "@/views/home/work-with-us/WorkWithUs";
import Recommendation from "@/views/blog/recommendation/Recommendation";
import { TextField, Box, Container, Image, Button } from "@/components/common";
import Layout from "@/components/globals/Layout";
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  return (
    <Layout height="h-auto">
      <Container variant="fixed" spacingY={20} className="py-16">
        <Box align="center" className="mx-auto md:w-3/4" spacingY={3}>
          <TextField
            component={"h3"}
            variant="subtitle1"
            text="UPDATE MAY, 2023"
          />
          <TextField
            component={"h1"}
            variant="title"
            text="A sophisticated <i>e-commerce</i> and <i>migration</i> to Shopify 2.0 for Intelligent Change"
          />
        </Box>

        <Image
          variant={"rounded"}
          alt={""}
          src={"/images/blog/blog1.png"}
          className="w-full h-[70vh]"
          objectFit="cover"
          fill={false}
        />

        <Box spacingY={7} className="md:w-3/4 mx-auto">
          <TextField
            component="h2"
            variant="subtitle1"
            text="lorem ipsum title"
            className="uppercase"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur. Urna varius lacus non libero
            lacus semper justo quam. Ornare ac enim vel euismod augue eget
            consectetur consectetur adipiscing diam vel accumsan. Nec duis
            porttitor suscipit id purus aliquam nunc. Arcu integer pharetra
            ipsum eget at magna sem. Habitasse justo eu id at. Augue pulvinar
            metus mattis quam leo proin placerat cras posuere.
          </p>
          <p>
            Nec duis porttitor suscipit id purus aliquam nunc. Arcu integer
            pharetra ipsum eget at magna sem. Habitasse justo consectetur ut
            morbi amet at cursus et. Mauris vulputate tempus volutpat duis eu id
            at. Augue pulvinar metus mattis consectetur ut morbi amet at cursus
            et. Mauris vulputate tempus volutpat duis quam leo proin placerat
            cras posuere.
          </p>
        </Box>

        <Image
          variant={"rounded"}
          alt={""}
          src={"/images/blog/blog4.png"}
          className="w-full h-[70vh]"
          objectFit="cover"
          fill={false}
        />

        <Box spacingY={7} className="md:w-3/4 mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur. Urna varius lacus non libero
            lacus semper justo quam. Ornare ac enim vel euismod augue eget
            consectetur consectetur adipiscing diam vel accumsan. Nec duis
            porttitor suscipit id purus aliquam nunc. Arcu integer pharetra
            ipsum eget at magna sem. Habitasse justo eu id at. Augue pulvinar
            metus mattis quam leo proin placerat cras posuere.
          </p>
          <p>
            Nec duis porttitor suscipit id purus aliquam nunc. Arcu integer
            pharetra ipsum eget at magna sem. Habitasse justo consectetur ut
            morbi amet at cursus et. Mauris vulputate tempus volutpat duis eu id
            at. Augue pulvinar metus mattis consectetur ut morbi amet at cursus
            et. Mauris vulputate tempus volutpat duis quam leo proin placerat
            cras posuere.
          </p>

          <Button
            variant={"outlined"}
            component="a"
            href="/"
            color="dark-gray"
            buttonSize="normal"
            className="inline-flex justify-start items-center space-x-2"
          >
            <span>Explore Website</span>
            <BsArrowRight />
          </Button>
        </Box>
      </Container>
      <Recommendation />
      <WorkWithUs />
    </Layout>
  );
};

export default Blog;
