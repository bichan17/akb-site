import React from "react";
import PortableText from "./portableText";
import styles from "./text-segment.module.css";
import PropTypes from "prop-types";

// import { bodyTextBlock } from "./typography.module.css";

const TextSegment = (props) => {
  const { blocks } = props;
  console.log(blocks);

  return (
    <div className={styles.root}>
      <PortableText blocks={blocks} />
    </div>
  );
};

TextSegment.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};

export default TextSegment;
