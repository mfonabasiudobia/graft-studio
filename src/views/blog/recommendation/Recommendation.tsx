import React from "react";
import { Box, Container, TextField, Image, Button } from "@/components/common";
import articles from "@/views/blog/articles/articles.json";
import { BsArrowRight } from "react-icons/bs";

const styles = {
  servicesWrapper: `flex items-center space-x-10 overflow-x-auto py-10`,
};

const Recommendation = () => {
  return (
    <Container variant="fluid">
      <Box className="border-t py-10">
        <TextField
          component={"h3"}
          variant="subtitle2"
          text="RECOMMENDED READING"
          className="uppercase"
        />
        <Box className={styles.servicesWrapper}>
          {articles.slice(1, 3).map(
            (
              item: {
                title: string;
                date: string;
                src: string;
                link: string;
              },
              index
            ) => (
              <Box spacingY={5} key={index} className="min-w-[95vw] md:min-w-0">
                <Image
                  variant={"rounded"}
                  alt={""}
                  src={item.src}
                  objectFit="cover"
                  className="w-full h-[50vh] md:h-[60vh]"
                  fill={false}
                />
                <Box spacingY={7}>
                  <TextField
                    component={"div"}
                    variant="subtitle2"
                    text={item.date}
                    className="uppercase"
                  />
                  <TextField
                    component={"h3"}
                    className="md:w-4/5"
                    variant="title"
                    text={item.title}
                  />

                  <Button
                    variant={"outlined"}
                    component="a"
                    href={item.link}
                    color="dark-gray"
                    buttonSize="normal"
                    className="inline-flex justify-start items-center space-x-2"
                  >
                    <span>Read more</span>
                    <BsArrowRight />
                  </Button>
                </Box>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Recommendation;
