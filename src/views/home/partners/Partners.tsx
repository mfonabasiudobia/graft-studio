import React, { useState, useEffect } from "react";
import { Box, Container, TextField, Image, Button } from "@/components/common";
import Logo1 from "@/images/logos/logo1.png";
import Logo2 from "@/images/logos/logo2.png";
import Logo3 from "@/images/logos/logo3.png";
import Logo4 from "@/images/logos/logo4.png";
import { BsArrowRight } from "react-icons/bs";

const styles = {
  partnerWrapper: `grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10`,
  partnerItemWrapper: `bg-dark px-5 py-10 md:py-16 flex justify-center rounded-lg`,
};

interface PartnerModel {
  title?: string;
}

const Partners: React.FC<PartnerModel> = ({ title = "" }) => {
  const [selected, setSelected] = useState<number>(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) setSelected(6); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container variant="fluid" className="py-10" spacingY={5}>
      <Box className="md:w-1/2" spacingY={4}>
        <TextField component="h2" variant="subtitle1" text="SELECTED CLIENTS" />

        {title.length > 0 && (
          <TextField component="h2" variant="title" text={title} />
        )}
      </Box>

      <Box className={styles.partnerWrapper}>
        {[Logo1, Logo2, Logo3, Logo3, Logo1, Logo4, Logo4, Logo3, Logo2]
          .slice(0, selected)
          .map((item, index) => (
            <Box className={styles.partnerItemWrapper} key={index}>
              <Image
                alt="Partner Logo"
                variant={"square"}
                src={item}
                width="auto"
                className="h-[30px] md:h-[40px]"
                fill={false}
              />
            </Box>
          ))}
      </Box>

      <Button
        variant={"outlined"}
        color="dark-gray"
        buttonSize="normal"
        onClick={() => setSelected((prev) => (prev === 20 ? 6 : 20))}
        className="w-full flex justify-center items-center space-x-2 md:hidden"
      >
        <span>Load {selected === 20 ? "less" : "more"}</span>
        <BsArrowRight />
      </Button>
    </Container>
  );
};

export default Partners;
