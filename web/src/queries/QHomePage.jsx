import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site, homePage }) => {
      return children({ site, homePage });
    }}
  />
);
const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
    }
    homePage: sanityHomePage {
      _rawIntroCopy(resolveReferences: { maxDepth: 10 })
      _rawClientsSlides(resolveReferences: { maxDepth: 10 })
      _rawServicesSlides(resolveReferences: { maxDepth: 10 })
      _rawWorkHeadline(resolveReferences: { maxDepth: 10 })
      _rawWorkSegments(resolveReferences: { maxDepth: 10 })
    }
  }
`;
