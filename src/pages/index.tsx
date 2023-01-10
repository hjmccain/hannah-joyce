import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="grid gap-4 grid-cols-3 grid-rows-3 min-h-screen">
      <h1 className="text-orange-600 mt-16 text-7xl col-start-2 row-start-2 text-center">
        hannah joyce
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
