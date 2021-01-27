import React, { useState } from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import QHomePage from "../queries/QHomePage";
import HomePage from "../components/home-page";
import { SectionContext } from "../lib/SectionContext";

const IndexPage = (props) => {
  const { errors } = props;

  const [currentSection, setCurrentSection] = useState("initial state");

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  return (
    <QHomePage>
      {({ site, homePage }) => {
        return (
          <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            <Layout>
              <SEO title={site.title} description={site.description} keywords={site.keywords} />
              <HomePage {...homePage} />
            </Layout>
          </SectionContext.Provider>
        );
      }}
    </QHomePage>
  );
};

export default IndexPage;
