import React from "react";
import { Box, Container, TextField, Button } from "@/components/common";
import { BsArrowRight } from "react-icons/bs";

const OurApproach = () => {
  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
      <Box className="md:w-3/4" spacingY={4}>
        <TextField component="h2" variant="subtitle1" text="THE STUDIO" />
        <TextField
          component="h1"
          variant="title"
          text="We have extensive knowledge of how the platform works, and how to maximise it. More in aenean purus. Amet in eget ultrices tempor pretium suspendisse. Scelerisque et id sem arcu."
        />
      </Box>
      <Button
        variant={"outlined"}
        component="a"
        href="/"
        color="dark-gray"
        buttonSize="normal"
        className="inline-flex justify-start items-center space-x-2"
      >
        <span>Our approach</span>
        <BsArrowRight />
      </Button>
    </Container>
  );
};

export default OurApproach;
