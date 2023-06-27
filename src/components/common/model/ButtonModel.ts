import { ReactNode } from "react";
import { StyleModel } from "@/hooks/model/styleModel";

export interface ButtonModel extends StyleModel {
  variant: "text" | "contained" | "outlined";
  text?: any;
  children?: ReactNode;
  component?: "button" | "a";
  href?: string;
  buttonSize?: "normal" | "medium" | "large" | "extra-large";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}