import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import QHomePage from "../queries/QHomePage";
import HomePage from "../components/home-page";

const IndexPage = (props) => {
  const { errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  return (
    <QHomePage>
      {({ site, homepage }) => {
        return (
          <Layout>
            <SEO title={site.title} description={site.description} keywords={site.keywords} />
            <HomePage {...homepage} />
          </Layout>
        );
      }}
    </QHomePage>
  );
};

export default IndexPage;
