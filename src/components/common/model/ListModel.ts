import { StyleModel } from "@/hooks/model/styleModel";
import { ReactNode } from "react";

export interface ListModel extends StyleModel {
  children?: ReactNode;
  variant?: "ul" | "div";
  childrenClassName?: string;
  alignment?: "horizontal" | "vertical";
  header?: ReactNode;
}