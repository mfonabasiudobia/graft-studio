import { ReactNode } from "react";
import { StyleModel } from "@/hooks/model/styleModel";

export interface ContainerModel extends StyleModel {
  variant: "fixed" | "fluid";
  [key: string]: any;
  children?: ReactNode;
}