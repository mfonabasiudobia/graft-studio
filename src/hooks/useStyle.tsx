import { StyleModel } from "./model/styleModel";

const useStyle = ({
  size,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  className,
  elevation,
  color,
}: StyleModel) => {
  const getFontWeight = () => {
    switch (weight) {
      case "normal":
        return "font-normal";
      case "light":
        return "font-light";
      case "thin":
        return "font-thin";
      case "extralight":
        return "font-extralight";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "black":
        return "font-black";
      default:
        return null;
    }
  };

  const getTextColor = () => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "light":
        return "text-light";
      case "danger":
        return "text-danger";
      case "secondary":
        return "text-secondary";
      case "success":
        return "text-success";
      case "dark":
        return "text-dark";
      case "white":
        return "text-white";
      default:
        return null;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "xs":
        return "text-xs";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      case "3xl":
        return "text-3xl";
      case "4xl":
        return "text-4xl";
      case "5xl":
        return "text-5xl";
      case "6xl":
        return "text-6xl";
      case "7xl":
        return "text-7xl";
      case "8xl":
        return "text-8xl";
      default:
        return null;
    }
  };

  const getSpacingY = () => {
    switch (spacingY) {
      case 1:
        return "space-y-1";
      case 2:
        return "space-y-2";
      case 3:
        return "space-y-3";
      case 4:
        return "space-y-4";
      case 5:
        return "space-y-5";
      case 6:
        return "space-y-6";
      case 7:
        return "space-y-7";
      case 8:
        return "space-y-8";
      case 9:
        return "space-y-9";
      case 10:
        return "space-y-10";
      case 16:
        return "space-y-16";
      case 20:
        return "space-y-20";
      case 28:
        return "space-y-28";
      default:
        return null;
    }
  };

  const getSpacingX = () => {
    switch (spacingX) {
      case 1:
        return "space-x-1";
      case 2:
        return "space-x-2";
      case 3:
        return "space-x-3";
      case 4:
        return "space-x-4";
      case 5:
        return "space-x-5";
      case 6:
        return "space-x-6";
      case 7:
        return "space-x-7";
      case 8:
        return "space-x-8";
      case 9:
        return "space-x-9";
      case 10:
        return "space-x-10";
      case 11:
        return "space-x-11";
      default:
        return null;
    }
  };

  const getSpacing = () => {
    switch (spacing) {
      case 1:
        return "space-1";
      case 2:
        return "space-2";
      case 3:
        return "space-3";
      case 4:
        return "space-4";
      case 5:
        return "space-5";
      case 6:
        return "space-6";
      case 7:
        return "space-7";
      case 8:
        return "space-8";
      case 9:
        return "space-9";
      case 10:
        return "space-10";
      case 11:
        return "space-11";
      default:
        return null;
    }
  };

  const getMarginSize = () => (margin ? margin : "m-0");

  const getPaddingSize = () => (padding ? padding : "p-0");

  const getAlignment = () => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "";
    }
  };

  const getElevation = () => {
    switch (elevation) {
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      case "xl":
        return "shadow-xl";
      case "2xl":
        return "shadow-2xl";
      default:
        return "shadow-0";
    }
  };

  return `
    ${getFontWeight()}
    ${getFontSize()}
    ${getMarginSize()}
    ${getPaddingSize()}
    ${getSpacingY()}
    ${getSpacingX()}
    ${getSpacing()}
    ${getAlignment()}
    ${getElevation()}
    ${className}
    ${getTextColor()}
  `;
};

export default useStyle;
