import React from "react";
import styles from "./page-section.module.css";
const PageSection = (props) => {
  const { children, anchor } = props;
  return <section className={styles.root}>{children}</section>;
};
export default PageSection;
