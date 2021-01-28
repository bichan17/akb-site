import React from "react";
import { cn } from "../lib/helpers";
import styles from "./page-section.module.css";
const PageSection = (props) => {
  const { children, anchor } = props;
  return (
    <section className={cn(styles.root, "section")} data-anchor={anchor}>
      {children}
    </section>
  );
};
export default PageSection;
