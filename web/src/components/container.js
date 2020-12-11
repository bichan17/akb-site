import React from "react";
import { cn } from "../lib/helpers";
import styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className={cn(styles.root)}>{children}</div>;
};

export default Container;
