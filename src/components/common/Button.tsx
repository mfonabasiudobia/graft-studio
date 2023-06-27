import { ButtonModel } from "./model/ButtonModel";
import useStyle from "@/hooks/useStyle";
import Link from "next/link";

const Button: React.FC<ButtonModel> = ({
  variant,
  className,
  elevation,
  component = "button",
  buttonSize = "normal",
  href,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  text,
  onClick,
  children,
}) => {
  const Tag = component;

  const getBackgroundColor = () => `bg-${color}`;

  const getHoverBackgroundColor = () => `hover:bg-black`;

  // {
  //   switch (color) {
  //     case "primary":
  //       return "bg-primary";
  //     case "light":
  //       return "bg-light";
  //     case "danger":
  //       return "bg-danger";
  //     case "secondary":
  //       return "bg-secondary";
  //     case "success":
  //       return "bg-success";
  //     case "dark":
  //       return "bg-dark";
  //     default:
  //       return "bg-primary";
  //   }
  // };

  const getBorderColor = () => {
    switch (color) {
      case "primary":
        return "hover:bg-primary hover:text-white hover:border-primary border-primary";
      case "light":
        return "hover:bg-light hover:text-dark hover:border-light border-light";
      case "white":
        return "hover:bg-white hover:text-dark hover:border-white border-white";
      case "danger":
        return "hover:bg-danger hover:text-white hover:border-danger border-danger";
      case "secondary":
        return "hover:bg-secondary hover:text-white hover:border-secondary border-secondary";
      case "success":
        return "hover:bg-success hover:text-white hover:border-success border-success";
      case "dark":
        return "hover:bg-dark hover:text-white hover:border-dark border-dark";
      default:
        return "hover:bg-white hover:text-dark hover:border-dark-gray border-dark-gray";
    }
  };

  const styles = {
    variantClass: `focus:outline-0 transition-all text-center inline-block 
    ${
      variant === "text"
        ? ""
        : variant === "contained"
        ? ``
        : variant === "outlined"
        ? `duration-500 border ${getBorderColor()}`
        : null
    }`,
    sizeClass:
      buttonSize === "extra-large"
        ? "py-5 px-20"
        : buttonSize === "normal"
        ? "px-3 py-4"
        : null,
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
      <Link href={href ? href : "/"} legacyBehavior>
        <a
          className={`inline-block no-underline ${Object.values(styles).join(
            " "
          )}`}
        >
          {text ? text : children}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={`inline-block ${Object.values(styles).join(" ")}`}
        onClick={onClick}
      >
        {text ? text : children}
      </button>
    );
  }
};

export default Button;
