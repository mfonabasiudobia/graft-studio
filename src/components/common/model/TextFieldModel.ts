import { ReactNode } from "react";
import { StyleModel } from "@/hooks/model/styleModel";

export interface TextFieldModel extends StyleModel {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "button" | "caption" | "span" | "section" | "button" | "a" | "div";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "title" | "subtitle1" | "subtitle2" | "caption" | "body1" | "body2",
  text?: any;
  href?: string;
  underline?: "always" | "hover" | "none";
  children?: ReactNode;
}

