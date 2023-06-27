import { ReactNode } from "react";
import { StyleModel } from "@/hooks/model/styleModel";

export interface ListItemModel extends StyleModel {
  LeftItem?: ReactNode;
  RightItem?: ReactNode;
  Item?: ReactNode;
  href?: string;
  component?: "a" | "li"
};