import React from "react";
import { Box, Container, TextField, Image } from "@/components/common";
import expertise from "./expertise.json";

const styles = {
  servicesWrapper: `flex items-center space-x-10 overflow-x-auto py-5`,
};

const OurServices = () => {
  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
      <Box className={styles.servicesWrapper}>
        {expertise.map(
          (
            item: { title: string; description: string; src: string },
            index
          ) => (
            <Box
              className="py-2 md:py-5 min-w-[95vw] md:min-w-0"
              spacingY={5}
              key={index}
            >
              <Image
                variant={"square"}
                alt={""}
                src={item.src}
                className="w-[50px] md:w-[70px] h-[70px]"
                fill={false}
              />
              <TextField
                component={"h3"}
                variant="subtitle1"
                text={item.title}
                className="uppercase"
              />
              <TextField
                component="p"
                variant="body1"
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
