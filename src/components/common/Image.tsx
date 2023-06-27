import { ImageModel } from "./model/ImageModel";
import useStyle from "@/hooks/useStyle";
import Image from "next/image";

const Avatar: React.FC<ImageModel> = ({
  className,
  variant,
  elevation,
  margin,
  padding,
  alt,
  src,
  objectFit = "contain",
  fill = false,
  width = 1000,
  height = 1000,
}) => {
  const styles = {
    importedStyles: useStyle({ margin, padding, className, elevation }),
    variantClass: `${
      variant === "circle"
        ? "rounded-full"
        : variant === "square"
        ? `rounded-0`
        : variant === "rounded"
        ? "rounded"
        : null
    }`,
    objectFit:
      objectFit === "contain"
        ? "object-contain"
        : objectFit === "cover"
        ? "object-cover"
        : objectFit === "fill"
        ? "object-fill"
        : null,
  };

  if (fill) {
    return (
      <Image
        alt={alt}
        src={src}
        loading="lazy"
        fill={fill}
        className={`${Object.values(styles).join(" ")}`}
      />
    );
  }
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      // priority={true}
      // loading="lazy"
      height={height}
      fill={fill}
      className={`${Object.values(styles).join(" ")}`}
    />
  );
};

export default Avatar;
