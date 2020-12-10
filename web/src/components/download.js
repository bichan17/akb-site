import React from "react";
import PropTypes from "prop-types";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./download.module.css";
import ConditionalWrapper from "./conditional-wrapper";
import PortableText from "./portableText";

const Download = (props) => {
  const { download, image, textBlock } = props;

  return (
    <div className={styles.root}>
      <ConditionalWrapper
        condition={download}
        wrapper={(children) => (
          <a href={download.asset.url} target="_blank">
            {children}
          </a>
        )}
      >
        <div className={styles.image}>
          <img src={imageUrlFor(buildImageObj(image)).auto("format").url()} alt={image.alt} />
        </div>
      </ConditionalWrapper>
      <div className={styles.text}>
        <PortableText blocks={textBlock} />
      </div>
    </div>
  );
};

Download.propTypes = {
  download: PropTypes.object,
  image: PropTypes.object,
  textBlock: PropTypes.array,
};

export default Download;
