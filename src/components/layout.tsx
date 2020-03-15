import React from "react";
import { css } from "@emotion/core";
import { Link, useStaticQuery, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

interface ListLinkProps {
  to: string;
}

const ListLink: React.FC<ListLinkProps> = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

interface LayoutProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<LayoutProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
};

export default Layout;
