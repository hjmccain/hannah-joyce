import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import classNames from "classnames";

const IndexPage: React.FC<PageProps> = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <main className="grid gap-4 grid-cols-3 grid-rows-3 min-h-screen">
      <button
        className="text-orange-600 mb-36 text-7xl col-start-2 row-start-2 text-center"
        onClick={() => setShowNav(true)}>
        hannah joyce
      </button>
      <button
        className={classNames(
          "col-start-1 row-start-3",
          showNav ? "block" : "hidden"
        )}>
        menu
      </button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
