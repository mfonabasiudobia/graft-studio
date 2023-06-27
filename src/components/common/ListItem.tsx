import { Fragment } from "react";
import { ListItemModel } from "./model/ListItemModel";
import useStyle from "@/hooks/useStyle";
import Link from "next/link";

const ListItem: React.FC<ListItemModel> = ({
  className,
  elevation,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  LeftItem,
  Item,
  RightItem,
  href,
  component,
}) => {
  const styles = {
    importedStyles: useStyle({
      size,
      color,
      margin,
      padding,
      className,
      elevation,
      align,
      weight,
      spacingX,
      spacingY,
      spacing,
    }),
  };

  if (component === "a") {
    return (
      <li>
        <Link href={href ? href : "/"} legacyBehavior>
          <a
            className={` ${Object.values(styles).join(
              " "
            )} flex items-center space-x-4`}
          >
            {LeftItem && LeftItem}
            {Item && Item}
            {RightItem && RightItem}
          </a>
        </Link>
      </li>
    );
  } else {
    return (
      <li
        className={`${Object.values(styles).join(
          " "
        )} flex items-center space-x-4`}
      >
        {LeftItem && LeftItem}
        {Item && Item}
        {RightItem && RightItem}
      </li>
    );
  }
};

export default ListItem;
