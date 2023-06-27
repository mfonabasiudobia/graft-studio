import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  ListItem,
  List,
} from "@/components/common";
import { BsArrowRight } from "react-icons/bs";

const ProjectOverview = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Container variant="fluid" className={`py-16 grid md:grid-cols-4 gap-10`}>
      <Box className="md:w-4/5 md:col-span-3" spacingY={7}>
        <Box spacingY={3}>
          <TextField
            component={"h3"}
            variant="subtitle1"
            text={"PROJECT OVERVIEW"}
          />
          <TextField
            component={"h3"}
            variant="title"
            text={
              "The lorem ipsum dolor sit amet consectetur. Ornare lectus quis commodo quisque amet quis sed eu. Mauris tellus placerat tellus placerat. Libero pharetra egestas elit pellentesque elementum nisl praesent at. Velit vel egestas ultricies egestas. Lobortis malesuada elementum nec faucibus."
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

      <Box className="space-y-5 md:space-y-10">
        <Box spacingY={2}>
          <Button
            variant={"outlined"}
            color="dark-gray"
            buttonSize="normal"
            onClick={() =>
              setSelected((prev) =>
                prev === "more-details" ? "" : "more-details"
              )
            }
            className="w-full flex md:hidden justify-start items-center space-x-2"
          >
            <span>More Details</span>
            <BsArrowRight />
          </Button>
          <Box
            spacingY={10}
            className={`${selected !== "more-details" && "hidden md:block"}`}
          >
            <Box spacingY={2}>
              <TextField variant="subtitle1" component="h3" text="SERVICES" />
              <List>
                <ListItem
                  component="a"
                  href="/"
                  Item="Custom theme development"
                />
                <ListItem
                  component="a"
                  href="/"
                  Item="Cross-border eCommerce"
                />
                <ListItem component="a" href="/" Item="International SEO" />
              </List>
            </Box>

            <Box spacingY={2}>
              <TextField variant="subtitle1" component="h3" text="TECHNOLOGY" />
              <List>
                <ListItem component="a" href="/" Item="Shopify Plus" />
                <ListItem component="a" href="/" Item="Klaviyo" />
              </List>
            </Box>
          </Box>
        </Box>

        <Box spacingY={2}>
          <Button
            variant={"outlined"}
            color="dark-gray"
            buttonSize="normal"
            onClick={() =>
              setSelected((prev) => (prev === "website" ? "" : "website"))
            }
            className="w-full flex md:hidden justify-start items-center space-x-2"
          >
            <span>View Website</span>
            <BsArrowRight />
          </Button>
          <Box
            className={`${selected !== "website" && "hidden md:block"}`}
            spacingY={2}
          >
            <TextField variant="subtitle1" component="h3" text="WEBSITE" />
            <List>
              <ListItem
                component="a"
                href="mailto:intelligentchange.com"
                Item="intelligentchange.com"
              />
            </List>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectOverview;
