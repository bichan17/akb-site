import React from "react";
import PropTypes from "prop-types";
import styles from "./work-segment.module.css";
import PortableText from "./portableText";
import Download from "./download";

const WorkSegment = (props) => {
  const { headline, segments } = props;

  console.log(segments);

  return (
    <div className={styles.root}>
      <div className={styles.headline}>
        <PortableText blocks={headline} />
      </div>

      {segments.map((s) => (
        <Download key={s._key} {...s} />
      ))}

      <div className={styles.downloadSegments}>{/* <PortableText blocks={headline} /> */}</div>
    </div>
  );
};

WorkSegment.propTypes = {
  headline: PropTypes.arrayOf(PropTypes.object),
  segments: PropTypes.arrayOf(PropTypes.object),
};

export default WorkSegment;
