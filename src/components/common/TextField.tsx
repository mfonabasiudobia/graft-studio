import { TextFieldModel } from "./model/TextFieldModel";
import useStyle from "@/hooks/useStyle";
import Link from "next/link";

const TextField: React.FC<TextFieldModel> = ({
  component,
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
  text,
  children,
  font,
  href,
  underline = "none",
  variant,
}) => {
  const Tag = component;

  const styles = {
    // variantClass:
    //   variant === "button"
    //     ? "text-center inline-block cursor-pointer rounded px-5 py-2"
    //     : variant === "h1"
    //     ? "leading-[52px] md:leading-[67.6px] text-[40px] md:text-[52px]"
    //     : variant === "h2"
    //     ? "text-[20px] md:text-[24px]"
    //     : null,
    variantClass:
      variant == "title"
        ? "text-[25px] md:text-[35px] font-light leading-[35px] md:leading-[2.8rem]"
        : variant === "subtitle1"
        ? "text-[14px] md:text-[16px]"
        : variant === "subtitle2"
        ? "text-[16px] text-[18px] font-light"
        : variant === "body1"
        ? "text-[18px] font-light"
        : null,
    componentClass: component === "span" ? "inline-block" : null,
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
    fontStyle: font ? `font-['${font}']` : null,
    underlineClass: `${
      underline === "none"
        ? "no-underline"
        : underline === "always"
        ? "underline underline-offset-8"
        : underline === "hover"
        ? "hover:underline hover:underline-offset-8"
        : null
    }`,
  };

  if (component === "a") {
    return (
      <Link href={href ? href : "/"} legacyBehavior>
        <a className={`inline-block ${Object.values(styles).join(" ")}`}>
          {text ? text : children}
        </a>
      </Link>
    );
  } else {
    if (text) {
      return (
        <Tag
          className={`${Object.values(styles).join(" ")}`}
          dangerouslySetInnerHTML={{ __html: text ? text : children }}
        />
      );
    }

    return (
      <Tag className={`${Object.values(styles).join(" ")}`}>{children}</Tag>
    );
  }
};

export default TextField;
