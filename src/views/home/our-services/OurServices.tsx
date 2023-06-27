import React, { useState } from "react";
import { Box, Container, TextField, Button } from "@/components/common";
import services from "./services.json";

const styles = {
  servicesWrapper: `grid md:grid-cols-2 gap-x-10`,
  servicesItemWrapper: `bg-dark px-5 py-16 flex justify-center rounded-lg`,
};

const OurServices = () => {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
      <Box className="md:w-3/4" spacingY={3}>
        <TextField component="h2" variant="subtitle1" text="OUR SERVICES" />
        <TextField
          component="h1"
          variant="title"
          text="The core services is focused on Shopify, but I cover a lot of other areas such as design and CMS development."
        />
      </Box>

      <Box className={styles.servicesWrapper}>
        {services.map((item: { title: string; description: string }, index) => (
          <Box
            className="border-t-2 border-b-2 border-dark-gray py-2 md:py-5"
            spacingY={3}
            key={index}
          >
            <Box className="flex items-center justify-between ">
              <TextField component={"div"} variant="title" text={item.title} />

              <Button
                variant={"text"}
                onClick={() => setSelected(selected === index ? -1 : index)}
                size="3xl"
              >
                {selected === index ? "‒" : "+"}
              </Button>
            </Box>
            <TextField
              component="p"
              variant="body1"
              text={item.description}
              className={selected === index ? "block" : "hidden"}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default OurServices;
