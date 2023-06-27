import React from "react";
import { Box, Container, TextField, List, ListItem } from "@/components/common";

const styles = {
  footerBottomItemWrapper: `border-t-2 border-t-dark-gray py-3 space-y-1`,
  footerBottomWrapper: `grid md:grid-cols-3 gap-10`,
  wrapper: `md:min-h-[100vh] flex flex-col space-y-28 md:space-y-0 justify-between`,
};

function Footer() {
  return (
    <Box component="footer" className="bg-dark py-10">
      <Container variant="fluid" className={styles.wrapper}>
        <Box className="grid md:grid-cols-3 gap-10">
          <Box>
            <TextField
              text="GRAFT STUDIO"
              component={"h1"}
              variant="h3"
              className="tracking-wider"
            />
          </Box>
          <Box className="md:col-start-3" spacingY={2}>
            <TextField
              text="Have a project in mind? consectetur accumsan purus nullam iaculis scelerisque the new something."
              component="div"
              weight="light"
            />

            <TextField
              text="Start a new project"
              component="a"
              href="/"
              className="text-dark-gray inline-block"
              underline="always"
              weight="light"
            />
          </Box>
        </Box>

        <Box className={styles.footerBottomWrapper} weight="light">
          <Box className={styles.footerBottomItemWrapper}>
            <TextField
              text="Address"
              className="text-dark-gray"
              component="h2"
            />
            <List>
              <ListItem Item="5-6 Benton Terrace" />
              <ListItem Item="Newcastle upon Tyne" />
              <ListItem Item="NE2 1QU" />
            </List>
          </Box>
          <Box className={styles.footerBottomItemWrapper}>
            <TextField text="Time" className="text-dark-gray" component="h2" />
            <List>
              <ListItem Item="Time 10:45 AM CEST" />
              <ListItem Item="England" />
            </List>
          </Box>

          <Box className={styles.footerBottomItemWrapper}>
            <TextField
              text="Contact"
              className="text-dark-gray"
              component="h2"
            />
            <List>
              <ListItem
                component="a"
                href="mailto:hello@graftstudio.com"
                Item="hello@graftstudio.com"
              />
              <ListItem component="a" href="/" Item="LinkedIn" />
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
