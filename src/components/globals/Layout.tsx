import React, { ReactElement, ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children?: ReactNode;
  height?: string;
  scrollTitle?: string;
  showHero?: boolean;
  backgroundImage?: string;
  title?: string | ReactElement;
}

const Layout = ({
  height,
  title,
  showHero,
  scrollTitle,
  backgroundImage,
  children,
}: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar
        height={height}
        title={title}
        scrollTitle={scrollTitle}
        showHero={showHero}
        backgroundImage={backgroundImage}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
