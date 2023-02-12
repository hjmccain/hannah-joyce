import React, { PropsWithChildren, ReactElement } from "react";
import Nav from "./nav";
import classNames from "classnames";
import Marquee from "./marquee";
import { navigate } from "gatsby";

type LayoutProps = { children?: ReactElement };

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen flex-col bg-background font-sans text-primary">
      <Marquee hideSelf={false} />
      <div
        className={classNames(
          "relative top-12 left-10 flex flex-row items-end"
        )}>
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
            "h-40 w-full px-10 text-center text-6xl text-primary",
            "md:m-0 md:my-12 md:w-auto md:text-bigger",
            "lg:whitespace-nowrap"
          )}>
          HANNAH JOYCE
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-grow flex-col justify-center md:mx-24"
        )}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
