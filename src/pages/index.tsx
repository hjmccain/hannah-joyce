import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "./nav";
import classNames from "classnames";
import About from "./about";

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
          showNav ? "md:border-4 md:border-black md:bg-slate-100" : "",
          "flex h-fit w-fit flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:row-start-2 md:mx-auto md:items-center md:rounded-[100px] md:p-10 xl:col-start-2"
        )}>
        <button
          className="m-12 my-4 h-10 text-left md:m-0 md:mb-4 md:h-auto md:text-center md:text-7xl"
          onClick={() => setShowNav(true)}>
          hannah joyce
        </button>
        {showNav && (
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
        )}
        <About hidden={!showAboutMe} toggleSelf={handleSetShowAboutMe} />
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
