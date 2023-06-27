import React from "react";
import { Box, Container, TextField, Button } from "@/components/common";
import { BsArrowRight } from "react-icons/bs";

const NextProject = () => {
  return (
    <Container
      variant="fluid"
      className={`bg-cover bg-no-repeat min-h-[90vh] py-16`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/case-study/image2.png')`,
      }}
    >
      <Box className="md:w-1/2" spacingY={7}>
        <Box spacingY={3}>
          <TextField
            component={"h3"}
            variant="subtitle1"
            text={"NEXT PROJECT"}
          />
          <TextField
            component={"h3"}
            variant="title"
            text={
              "A sophisticated <i>e-commerce</i> and <i>migration</i> to Shopify 2.0 for BLK"
            }
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
          <span>See Case Study</span>
          <BsArrowRight />
        </Button>
      </Box>
    </Container>
  );
};

export default NextProject;
