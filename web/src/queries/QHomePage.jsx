import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site, homepage }) => {
      console.log(site);
      return children({ site, homepage });
    }}
  />
);
const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    homepage: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
