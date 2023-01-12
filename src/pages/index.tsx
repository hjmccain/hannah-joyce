import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "./nav";
import classNames from "classnames";

const IndexPage: React.FC<PageProps> = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [showAboutMe, setShowAboutMe] = React.useState(false);

  const handleSetShowAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  // get screen size and set `showNav` to true below 768px

  return (
    <main className="grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid-cols-3 md:grid-rows-3">
      <div
        className={classNames(
          showAboutMe ? "h-[416px]" : "h-[144px]",
          "flex w-fit flex-col overflow-hidden transition-all duration-300 md:col-start-2 md:row-span-2 md:row-start-2 md:mx-auto md:items-center md:rounded-3xl md:border-4 md:border-black md:bg-slate-100 md:p-6"
        )}>
        <button
          className="m-12 my-4 h-10 text-left text-orange-600 md:m-0 md:mb-4 md:h-auto md:text-center md:text-7xl"
          onClick={() => setShowNav(true)}>
          hannah joyce
        </button>
        {/* {showAboutMe && ( */}
        <div
          className={classNames(
            showAboutMe ? "opacity-100" : "opacity-0",
            "flex max-w-[400px] items-end transition-opacity md:mb-4"
          )}>
          <p className="text-justify md:text-2xl">
            is a software developer and poet who bleh blah blo blu blah ipsum
            dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        {/* )} */}
      </div>
      {showNav && <Nav toggleAbout={handleSetShowAboutMe} />}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
