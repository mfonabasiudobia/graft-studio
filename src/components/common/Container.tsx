import { ContainerModel } from "./model/ContainerModel";
import useStyle from "@/hooks/useStyle";

const Container = ({
  className,
  variant,
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
}: ContainerModel) => {
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
    variantClass: `mx-auto px-3 md:px-7 ${
      variant === "fluid"
        ? "max-w-screen"
        : variant === "fixed"
        ? `max-w-xl sm:max-w-5xl lg:max-w-4xl xl:max-w-3xl `
        : null
    }`,
  };

  return (
    <div className={`w-full ${Object.values(styles).join(" ")}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
