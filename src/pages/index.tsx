import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import classNames from "classnames";

const IndexPage: React.FC<PageProps> = () => {
  const [showNav, setShowNav] = React.useState(false);

  // get screen size and set `showNav` to true below 768px

  return (
    <main className="grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid-cols-3 md:grid-rows-3">
      <button
        className="ml-12 mt-4 h-10 text-left text-orange-600 md:col-start-2 md:row-start-2 md:mb-36 md:ml-0 md:mt-0 md:h-full md:text-center md:text-7xl"
        onClick={() => setShowNav(true)}>
        hannah joyce
      </button>
      {showNav && (
        <div className="flex items-end md:col-start-1 md:row-start-3 md:mb-16">
          <nav className="nav group relative h-fit content-end md:row-start-3 md:m-10">
            <button className="absolute bottom-[-66px] ml-10 rounded-full border-4 border-black bg-white py-6 px-4 opacity-100 duration-1000 group-hover:opacity-0 md:ml-0 md:py-10 md:px-8">
              menu
            </button>
            <div className="mt-4 opacity-0 group-hover:opacity-100 md:mt-0">
              <button
                className={classNames(
                  "absolute bottom-[-66px] z-20 ml-10 w-28 origin-[40px_40px] rounded-full border-4 border-black bg-white py-6 hover:bg-slate-400 group-hover:w-72 group-hover:rotate-[65deg] md:ml-0 md:origin-[56px_56px] md:py-10 md:group-hover:w-96 md:group-hover:-rotate-[65deg]"
                )}>
                about
              </button>
              <button
                className={classNames(
                  "absolute bottom-[-66px] z-10 ml-10 w-28 origin-[40px_40px] rounded-full border-4 border-black bg-white py-6 hover:bg-slate-400 group-hover:w-72 group-hover:rotate-[32deg] md:ml-0 md:origin-[56px_56px] md:py-10 md:group-hover:w-96 md:group-hover:-rotate-[32deg]"
                )}>
                gallery
              </button>
              <button className="absolute bottom-[-66px] ml-10 w-28 origin-[40px_40px] rounded-full border-4 border-black bg-white py-6 duration-1000 hover:bg-slate-400 group-hover:w-72 md:ml-0 md:origin-[56px_56px] md:py-10 md:group-hover:w-96">
                contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
