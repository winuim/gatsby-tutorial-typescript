import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

const Contact: React.FC = () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <p>Send us a message!</p>
      <Header headerText="ConI'd love to talk! Email me at the address belowtact" />
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  </Layout>
);

export default Contact;
