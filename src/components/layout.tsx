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
      <div className={classNames()}>
        <div className={classNames("relative top-12 left-10 flex items-end")}>
          <Nav
            toggleAbout={() => navigate("/about/")}
            toggleContact={() => navigate("/contact/")}
            togglePortfolio={() => null}
          />
        </div>
        <div
          className={classNames(
            "detail-view-transition flex w-full flex-col justify-self-center transition-all duration-500"
          )}>
          <div
            className={classNames(
              "h-40 w-full px-10 text-center font-display text-6xl text-primary",
              "md:m-0 md:my-12 md:w-auto md:text-bigger md:tracking-wide",
              "lg:whitespace-nowrap"
            )}>
            Hannah Joyce
          </div>
        </div>
        <div className={classNames("md:mx-24")}>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
