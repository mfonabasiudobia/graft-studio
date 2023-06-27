import {
  Box,
  Container,
  Drawer,
  ListItem,
  List,
  Button,
  TextField,
} from "@/components/common";
import { GrClose } from "react-icons/gr";

interface SidebarModel {
  isOpen: boolean;
  closeDrawer?: () => void;
}

const Sidebar: React.FC<SidebarModel> = ({ isOpen, closeDrawer }) => {
  const styles = {
    navItem: `py-3  w-full hover:italic`,
  };

  return (
    <Drawer
      isOpen={isOpen}
      closeDrawer={closeDrawer}
      direction="right"
      size="70vw"
      customIdSuffix="main-mobile-drawer"
    >
      <Box className="bg-white h-screen overflow-y-auto">
        <Container variant="fluid" className="py-5 flex justify-end">
          <Button onClick={closeDrawer} variant={"text"}>
            <GrClose size={25} />
          </Button>
        </Container>

        <Container
          variant="fluid"
          color="dark"
          className="flex flex-col min-h-screen overflow-y-auto"
        >
          <List alignment="vertical" className="flex-1">
            {[
              {
                title: "About",
                href: "/about",
              },
              {
                title: "Case Study",
                href: "/case-study",
              },
              {
                title: "Blog",
                href: "/blog",
              },
              {
                title: "Contact",
                href: "/contact",
              },
            ].map((item, index) => (
              <ListItem
                key={index}
                Item={
                  <TextField
                    component="a"
                    variant="title"
                    href={item.href}
                    text={item.title}
                    className={styles.navItem}
                  />
                }
              />
            ))}
          </List>

          <Box spacingY={5} className="py-5">
            <List alignment="vertical">
              <ListItem Item="GraftStudio" color="secondary" />
              <ListItem Item="5-6 Benton Terrace" />
              <ListItem Item="Newcastle upon Tyne" />
              <ListItem Item="NE21QU" />
            </List>

            <List alignment="vertical">
              <ListItem
                component="a"
                href="mailto:email@email.com"
                Item="Email"
              />
              <ListItem
                component="a"
                href="https://linkedin.con"
                Item="LinkedIn"
              />
            </List>
          </Box>
        </Container>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
