import { ReactNode, ReactElement } from "react";
import { StyleModel } from "@/hooks/model/styleModel";

export interface BoxModel extends StyleModel {
  children?: ReactNode | ReactElement;
  [key: string]: any;
  component?: "div" | "nav" | "header" | "footer" | "section" | "main";
}