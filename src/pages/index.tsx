import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const Index: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default Index;

export const Head: HeadFC = () => <title>Home Page</title>;
