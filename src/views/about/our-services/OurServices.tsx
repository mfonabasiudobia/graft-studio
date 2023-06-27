import React, { useState } from "react";
import { Box, Container, TextField, Image, Button } from "@/components/common";
import services from "./services.json";

const styles = {
  servicesWrapper: `grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:gap-x-10 md:gap-y-16`,
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
          text="The core services is focused on Shopify and CMS development."
        />
      </Box>

      <Box className={styles.servicesWrapper}>
        {services.map(
          (
            item: { title: string; description: string; src: string },
            index
          ) => (
            <Box
              className={`py-5 border-t ${
                index > services.length && "border-b"
              } md:border-0`}
              spacingY={5}
              key={index}
            >
              <Box className="flex items-center justify-between">
                <Box className="flex flex-row space-x-5 md:space-x-0 items-center md:items-start md:flex-col md:space-y-5">
                  <Image
                    variant={"square"}
                    alt={""}
                    src={item.src}
                    className="w-[30px] md:w-[50px] h-auto"
                    fill={false}
                  />
                  <TextField
                    component={"h3"}
                    variant="subtitle1"
                    text={item.title}
                    className="uppercase"
                  />
                </Box>

                <Button
                  variant={"text"}
                  className="md:hidden"
                  onClick={() => setSelected(selected === index ? -1 : index)}
                  size="3xl"
                >
                  {selected === index ? "‒" : "+"}
                </Button>
              </Box>
              <TextField
                component="p"
                variant="body1"
                className={`${selected !== index && "hidden md:block"}`}
                text={item.description}
              />
            </Box>
          )
        )}
      </Box>
    </Container>
  );
};

export default OurServices;
