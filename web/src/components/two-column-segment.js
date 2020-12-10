import React from "react";
import PropTypes from "prop-types";
import PortableText from "./portableText";
import styles from "./two-column-segment.module.css";

const TwoColumnSegment = (props) => {
  const { leftBlock, rightBlock } = props;

  console.log(leftBlock, rightBlock);
  return (
    <div className={styles.root}>
      <div className={styles.leftCol}>
        <PortableText blocks={leftBlock} />
      </div>
      <div className={styles.rightCol}>
        <PortableText blocks={rightBlock} />
      </div>
    </div>
  );
};

TwoColumnSegment.propTypes = {
  leftBlock: PropTypes.arrayOf(PropTypes.object),
  rightBlock: PropTypes.arrayOf(PropTypes.object),
};

export default TwoColumnSegment;
