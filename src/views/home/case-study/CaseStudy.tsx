import React from "react";
import { Box, Container, TextField, Button, Image } from "@/components/common";
import Image1 from "@/images/case-study/image1.png";
import Image2 from "@/images/case-study/image2.png";
import Image3 from "@/images/case-study/image3.png";
import { BsArrowRight } from "react-icons/bs";

const styles = {
  wrapper: `grid grid-cols-1 gap-16 md:gap-40`,
};

const CaseStudy = () => {
  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
      <Box className=" border-t-2 border-dark-gray py-7" spacingY={5}>
        <TextField component="h2" variant="subtitle1" text="CASE STUDY" />

        <Box className={styles.wrapper}>
          {[
            {
              title: "INTELLIGENT CHANGE",
              image: Image3,
              src: "/case-study/blk-water",
            },
            {
              title: "BLK WATER",
              image: Image2,
              src: "/case-study/blk-water",
            },
            {
              title: "CULT GAIA",
              image: Image1,
              src: "/case-study/blk-water",
            },
          ].map((item, index) => (
            <Box spacingY={2} key={index} className="relative">
              <Image
                variant={"square"}
                alt={"Case Study Image1"}
                className="w-full h-full"
                src={item.image}
                fill={false}
              />
              <Box className="flex items-center justify-center sm:justify-between flex-col sm:flex-row absolute sm:static bottom-10 w-full">
                <TextField
                  component="h2"
                  variant="subtitle1"
                  text={item.title}
                />
                <TextField
                  component="a"
                  href={item.src}
                  variant="subtitle1"
                  underline="hover"
                  text="Explore Case Study"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="flex justify-center">
        <Button
          variant={"outlined"}
          component="a"
          href="/case-study"
          color="dark-gray"
          buttonSize="extra-large"
          className="flex items-center space-x-2"
        >
          <span>Explore all</span>
          <BsArrowRight />
        </Button>
      </Box>
    </Container>
  );
};

export default CaseStudy;
