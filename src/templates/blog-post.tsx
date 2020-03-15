import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BlogPostQuery } from "../../types/graphql-types";

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;

interface IBlogProps {
  data: BlogPostQuery;
  location: Location;
}

const BlogPost: React.FC<IBlogProps> = ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO
        title={post?.frontmatter?.title || ""}
        description={post?.excerpt || ""}
      />
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html || "" }} />
      </div>
    </Layout>
  );
};

export default BlogPost;
