import React from "react";
import PropTypes from "prop-types";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./download.module.css";
import { bodyText } from "./typography.module.css";

import ConditionalWrapper from "./conditional-wrapper";
import PortableText from "./portableText";

const Download = (props) => {
  const { download, image, textBlock, inverted } = props;

  return (
    <div className={cn(styles.root, inverted ? styles.inverted : "")}>
      <ConditionalWrapper
        condition={download}
        wrapper={(children) => (
          <a className={styles.downloadLink} href={download.asset.url} target="_blank">
            {children}
          </a>
        )}
      >
        <div className={styles.image}>
          <img src={imageUrlFor(buildImageObj(image)).auto("format").url()} alt={image.alt} />
        </div>
      </ConditionalWrapper>
      <div className={cn(styles.text, bodyText)}>
        <PortableText blocks={textBlock} />
      </div>
    </div>
  );
};

Download.propTypes = {
  download: PropTypes.object,
  image: PropTypes.object,
  textBlock: PropTypes.array,
  inverted: PropTypes.bool,
};

export default Download;
