import React from "react";
import Container from "./container";
import PortableText from "./portableText";
import styles from "./text-segment.module.css";
import PropTypes from "prop-types";

import { cn } from "../lib/helpers";

import { large } from "./typography.module.css";

const TextSegment = (props) => {
  const { blocks, variant } = props;

  console.log(variant);

  return (
    <Container>
      <div className={cn(styles.root, large, variant == variants.narrow ? styles.narrow : "")}>
        <PortableText blocks={blocks} />
      </div>
    </Container>
  );
};

const variants = {
  narrow: "narrow",
};

TextSegment.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
  variants: PropTypes.oneOf(Object.keys(variants)),
};
TextSegment.variants = variants;

export default TextSegment;
