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
    <main className="grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid-rows-3 xl:grid-cols-3">
      <div
        className={classNames(
          showAboutMe ? "md:h-[446px]" : "md:h-[174px]",
          "flex h-fit w-fit flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:row-start-2 md:mx-auto md:items-center md:rounded-[100px] md:border-4 md:border-black md:bg-slate-100 md:p-10 xl:col-start-2"
        )}>
        <button
          className="m-12 my-4 h-10 text-left text-orange-600 md:m-0 md:mb-4 md:h-auto md:text-center md:text-7xl"
          onClick={() => setShowNav(true)}>
          hannah joyce
        </button>
        <button
          className={classNames(
            showAboutMe
              ? "text-[0px] opacity-0"
              : "mt-[-.5rem] text-xl opacity-100",
            "hidden self-center transition-opacity delay-200 md:block"
          )}
          onClick={handleSetShowAboutMe}>
          ⌄
        </button>

        <div
          className={classNames(
            showAboutMe
              ? "bg-slate-100 p-10 text-sm opacity-100 md:p-0"
              : "text-[0px] opacity-0",
            "flex flex-col items-end transition-all duration-300 md:m-0 md:w-[420px]"
          )}>
          <button className="md:hidden" onClick={handleSetShowAboutMe}>
            X
          </button>
          <p className="text-justify md:text-2xl">
            is a software developer and poet who bleh blah blo blu blah ipsum
            dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button
            className="mt-4 hidden self-center text-xl md:block"
            onClick={handleSetShowAboutMe}>
            ^
          </button>
        </div>
      </div>
      {showNav && (
        <div
          className={classNames(
            showAboutMe ? "hidden md:flex" : "flex",
            "flex items-end md:col-start-1 md:row-start-3 md:mb-16"
          )}>
          <Nav toggleAbout={handleSetShowAboutMe} />
        </div>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
