import React from "react";
import { Box, Container, TextField } from "@/components/common";

const WorkWithUs = () => {
  return (
    <Container variant="fluid" className="py-16">
      <Box
        className="bg-white rounded-3xl py-10 px-10 flex flex-col text-center md:text-left"
        color="dark"
        spacingY={3}
      >
        <TextField component={"h2"} variant="subtitle1" text={"WORK WITH US"} />

        <TextField component={"h1"} variant="title">
          Got a <i>Project</i> in mind? <br />
          Let’s talk
        </TextField>

        <TextField
          component={"a"}
          href="/contact"
          text={"Contact us"}
          underline="always"
        />
      </Box>
    </Container>
  );
};

export default WorkWithUs;
