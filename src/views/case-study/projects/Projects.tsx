import React from "react";
import { Box, Container, TextField, Button, Image } from "@/components/common";
import Image1 from "@/images/case-study/image1.png";
import Image2 from "@/images/case-study/image2.png";
import Image3 from "@/images/case-study/image3.png";
import Image4 from "@/images/case-study/image4.png";
import Image5 from "@/images/case-study/image5.png";
import Image6 from "@/images/case-study/image6.png";
import Image7 from "@/images/case-study/image7.png";

const styles = {
  wrapper: `grid md:grid-cols-2 gap-16 md:gap-y-40`,
};

const positionWithRows = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14];

const Projects = () => {
  return (
    <Container variant="fluid" className="py-16" spacingY={10}>
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
            title: "BLK WATER",
            image: Image6,
            src: "/case-study/blk-water",
          },
          {
            title: "CULT GAIA",
            image: Image1,
            src: "/case-study/blk-water",
          },
          {
            title: "BLK WATER",
            image: Image3,
            src: "/case-study/blk-water",
          },
          {
            title: "BLK WATER",
            image: Image7,
            src: "/case-study/blk-water",
          },
          {
            title: "CULT GAIA",
            image: Image4,
            src: "/case-study/blk-water",
          },
        ].map((item, index) => (
          <Box
            spacingY={2}
            key={index}
            className={`relative ${
              !positionWithRows.includes(index) ? "md:col-span-2" : null
            }`}
          >
            <Image
              variant={"rounded"}
              alt={"Case Study Image1"}
              className="w-full h-[50vh] md:h-[90vh]"
              objectFit="cover"
              src={item.image}
              fill={false}
            />
            <Box className="flex items-center justify-center sm:justify-between flex-col sm:flex-row absolute sm:static bottom-10 w-full">
              <TextField component="h2" variant="subtitle1" text={item.title} />
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
    </Container>
  );
};

export default Projects;
