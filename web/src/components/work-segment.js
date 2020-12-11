import React from "react";
import PropTypes from "prop-types";
import Container from "./container";
import styles from "./work-segment.module.css";
import PortableText from "./portableText";
import Download from "./download";

const WorkSegment = (props) => {
  const { headline, segments } = props;

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.headline}>
          <PortableText blocks={headline} />
        </div>

        <div className={styles.downloadSegments}>
          {segments.map((s, index) => (
            <Download key={s._key} {...s} inverted={index % 2 == 1} />
          ))}
        </div>
      </div>
    </Container>
  );
};

WorkSegment.propTypes = {
  headline: PropTypes.arrayOf(PropTypes.object),
  segments: PropTypes.arrayOf(PropTypes.object),
};

export default WorkSegment;
