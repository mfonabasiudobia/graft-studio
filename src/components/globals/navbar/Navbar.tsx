import {
  Box,
  Container,
  List,
  ListItem,
  TextField,
  Button,
} from "@/components/common";
import React, { ReactElement, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Sidebar from "./Sidebar";

interface Navbar {
  height?: string;
  title?: string | ReactElement;
  scrollTitle?: string;
  showHero?: boolean;
  backgroundImage?: string;
}

const Navbar: React.FC<Navbar> = ({
  height,
  title,
  showHero = true,
  scrollTitle = "",
  backgroundImage = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} closeDrawer={toggleDrawer} />
      <Container
        variant={"fluid"}
        className={`bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${backgroundImage}')`,
        }}
        spacingY={10}
      >
        <Box
          className="flex items-center justify-between py-3 md:py-5 border-b"
          component="nav"
        >
          <TextField
            component="a"
            href="/"
            className="text-xl font-medium"
            text={`GraftStudio`}
          />
          <List alignment="horizontal" spacingX={7} className="hidden md:flex">
            <ListItem component="a" href="/about" Item="About" />
            <ListItem component="a" href="/case-study" Item="Case Study" />
            <ListItem component="a" href="/blog" Item="Blog" />
            <ListItem component="a" href="/contact" Item="Contact" />
          </List>

          <Button
            variant={"text"}
            className={`flex items-center space-x-1 md:hidden`}
            onClick={toggleDrawer}
          >
            <span>Menu</span>
            <BsArrowRight />
          </Button>
        </Box>
        <Box
          className={`md:w-[40%] flex flex-col space-y-5 justify-between items-start ${
            !showHero ? "hidden" : height
          }`}
        >
          {React.isValidElement(title) ? (
            title
          ) : (
            <TextField component="h1" variant="title" text={title} />
          )}

          {scrollTitle.length > 0 && (
            <Button
              variant={"text"}
              className={`flex items-center px-0 md:space-x-3 text-sm`}
              onClick={() =>
                window.scrollTo({
                  top: 500,
                  behavior: "smooth",
                })
              }
            >
              <img
                src="/svg/arrow-down.svg"
                alt=""
                className="border rounded-full w-[40px] h-[40px] p-3"
              />
              <span className="hidden md:inline">{scrollTitle}</span>
            </Button>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
