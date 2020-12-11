import React from "react";
import Container from "./container";
import PropTypes from "prop-types";
import PortableText from "./portableText";
import styles from "./two-column-segment.module.css";
import { cn } from "../lib/helpers";
import { bodyText } from "./typography.module.css";

const TwoColumnSegment = (props) => {
  const { leftBlock, rightBlock } = props;

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.leftCol}>
          <PortableText blocks={leftBlock} />
        </div>
        <div className={cn(styles.rightCol, bodyText)}>
          <PortableText blocks={rightBlock} />
        </div>
      </div>
    </Container>
  );
};

TwoColumnSegment.propTypes = {
  leftBlock: PropTypes.arrayOf(PropTypes.object),
  rightBlock: PropTypes.arrayOf(PropTypes.object),
};

export default TwoColumnSegment;
