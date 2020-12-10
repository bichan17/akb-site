import React from "react";
import TextSlide from "./text-segment";
import styles from "./slide.module.css";

const Slide = (props) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};

export default Slide;
