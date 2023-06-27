import React from "react";
import { Box, Container, TextField, Image, Button } from "@/components/common";
import articles from "./articles.json";
import { BsArrowRight } from "react-icons/bs";

const styles = {
  servicesWrapper: `grid gap-10`,
};

const Articles = () => {
  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
      <Box className={styles.servicesWrapper}>
        {articles.map(
          (
            item: { title: string; date: string; src: string; link: string },
            index
          ) => (
            <Box
              className="p-7 bg-dark rounded-xl grid md:grid-cols-4 gap-5"
              spacingY={5}
              key={index}
            >
              <Box className={`md:col-span-3 md:p-5`} spacingY={7}>
                <TextField
                  component={"div"}
                  variant="subtitle2"
                  text={item.date}
                  className="uppercase"
                />
                <TextField
                  component={"h3"}
                  variant="title"
                  className="md:w-1/2"
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

              <Image
                variant={"rounded"}
                alt={""}
                src={item.src}
                objectFit="cover"
                className={`w-full h-[50vh] md:h-[70vh]`}
                fill={false}
              />
            </Box>
          )
        )}
      </Box>
    </Container>
  );
};

export default Articles;
