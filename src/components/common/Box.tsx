import { BoxModel } from "./model/BoxModel";
import useStyle from "@/hooks/useStyle";

const Box = ({
  className,
  component = "div",
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
  children,
  ...rest
}: BoxModel) => {
  const Tag = component;

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

  return (
    <Tag className={`${Object.values(styles).join(" ")}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Box;
