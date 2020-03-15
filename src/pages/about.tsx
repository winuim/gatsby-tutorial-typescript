import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { AboutQuery } from "../../types/graphql-types";

export const pageQuery = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

interface IAboutProps {
  data: AboutQuery;
  location: Location;
}

const About: React.FC<IAboutProps> = ({ data, location }) => (
  <Layout>
    <h1>About {data.site?.siteMetadata?.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
);

export default About;
