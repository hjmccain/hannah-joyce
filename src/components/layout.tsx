import React, { PropsWithChildren, ReactElement } from "react";
import Nav from "./nav";
import classNames from "classnames";
import Marquee from "./marquee";
import { navigate } from "gatsby";

type LayoutProps = { children?: ReactElement };

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen bg-background font-sans text-primary">
      <Marquee hideSelf={false} />
      <div
        className={classNames(
          "relative mx-24 flex flex-col items-center justify-between",
          "md:grid md:grid-cols-1 md:grid-rows-2 md:items-start md:gap-4",
          "xl:grid-cols-3"
        )}>
        <div
          className={classNames("relative top-12 left-[-57px] flex items-end")}>
          <Nav
            toggleAbout={() => navigate("/about/")}
            toggleContact={() => navigate("/contact/")}
            togglePortfolio={() => null}
          />
        </div>
        <div
          className={classNames(
            "detail-view-transition flex w-full flex-col justify-self-center transition-all duration-500",
            "md:col-start-1 md:row-span-2 md:row-start-1 md:mt-20 md:w-fit md:items-center md:p-10",
            "xl:col-start-2"
          )}>
          <button
            className={classNames(
              "h-40 w-full cursor-default px-10 text-center font-display text-6xl text-primary transition-all duration-700",
              "md:m-0 md:my-4 md:w-auto md:text-med",
              "lg:whitespace-nowrap"
            )}
            onClick={() => null}>
            HANNAH JOYCE
          </button>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
