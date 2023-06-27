import React from "react";
import { ListModel } from "./model/ListModel";
import useStyle from "@/hooks/useStyle";

const List: React.FC<ListModel> = ({
  className,
  variant = "ul",
  childrenClassName,
  alignment = "vertical",
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
  header,
  children,
}) => {
  const Tag = variant;

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
    alignmentClass:
      alignment === "horizontal"
        ? "flex items-center space-x-2"
        : alignment === "vertical"
        ? ""
        : null,
  };

  return (
    <Tag className={`${Object.values(styles).join(" ")}`}>
      {header}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: childrenClassName,
            key: index,
          });
        }
        return child;
      })}
    </Tag>
  );
};

export default List;
