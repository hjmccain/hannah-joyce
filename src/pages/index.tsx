import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import classNames from "classnames";

const IndexPage: React.FC<PageProps> = () => {
  // const [showNavButton, setShowNavButton] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);
  const [expandNav, toggleExpandNav] = React.useState(false);

  return (
    <main className="grid min-h-screen grid-cols-3 grid-rows-3 gap-4">
      <button
        className="col-start-2 row-start-2 mb-36 text-center text-7xl text-orange-600"
        onClick={() => setShowNav(true)}>
        hannah joyce
      </button>
      {showNav && (
        <div className="col-start-1 row-start-3 mb-16 grid grid-rows-3">
          <nav className="group relative row-start-3 m-10 ml-10 h-fit content-end">
            <button className="absolute z-30 col-start-1 row-start-3 rounded-full border-4 border-black bg-white py-10 px-8">
              menu
            </button>
            <div className="opacity-0 group-hover:opacity-100">
              <button
                className={classNames(
                  "absolute z-20 col-start-1 row-start-3 w-28 origin-[54px_54px] rounded-full border-4 border-black bg-white py-10 duration-1000 group-hover:w-96 group-hover:-rotate-[65deg]"
                )}>
                gallery
              </button>
              <button
                className={classNames(
                  "absolute z-10 col-start-1 row-start-3 w-28 origin-[54px_54px] rounded-full border-4 border-black bg-white py-10 transition-all duration-1000 group-hover:w-96 group-hover:-rotate-[32deg]"
                )}>
                about
              </button>
              <button className="absolute col-start-1 row-start-3 w-28 origin-[54px_54px] rounded-full border-4 border-black bg-white py-10 duration-1000 group-hover:w-96">
                contact
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* <div
        onHover={() => {
          setShowNavButton(false);
          setShowNav(true);
        }}
        className={classNames(
          "col-start-1 row-start-3",
          showNavButton ? "block" : "hidden"
        )}>
        menu
      </button>
      <nav
        className={classNames(
          "col-start-1 row-start-3",
          showNav ? "block" : "hidden"
        )}>
        <button>about</button>
        <button>gallery</button>
        <button>contact</button>
      </nav> */}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
