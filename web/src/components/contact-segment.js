import React from "react";
import styles from "./contact-segment.module.css";
import { large } from "./typography.module.css";
import { cn } from "../lib/helpers";

const ContactSegment = (props) => {
  return (
    <div className={styles.root}>
      <h1 className={cn(large)}>Get In Touch</h1>
      <div className={cn(styles.contactLinks, large)}>
        <a href="#">Email Me</a>
        <br />
        <a href="#">Find me on LinkedIn</a>
      </div>
      <p>I do offer sliding scale pricing.</p>
    </div>
  );
};

export default ContactSegment;
