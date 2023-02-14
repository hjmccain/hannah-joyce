import React, { PropsWithChildren, ReactElement } from "react";
import Nav from "./nav";
import classNames from "classnames";
import Marquee from "./marquee";
import { navigate } from "gatsby";

type LayoutProps = { children?: ReactElement };

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="flex max-h-full min-h-screen flex-col bg-secondary font-sans text-primary">
      <Marquee hideSelf={false} />
      <div
        className={classNames(
          "relative top-12 flex flex-row items-end md:left-10 md:z-40"
        )}>
        <Nav />
      </div>
      <div
        className={classNames(
          "detail-view-transition flex w-full flex-col justify-self-center transition-all duration-500 md:mb-40"
        )}>
        <div
          className={classNames(
            "h-40 w-full px-10 text-center font-display text-med text-primary",
            "md:m-0 md:my-12 md:w-auto md:text-bigger"
          )}>
          <p>HANNAH</p>
          <p className="mt-[-3rem] md:mt-[-9rem]">JOYCE</p>
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-grow flex-col justify-center md:mx-24"
        )}>
        {children}
      </div>
      <div>
        <li className="list-none bg-primary py-[.18rem] text-center text-[2rem] text-white hover:bg-black">
          <a href="mailto:hannahjmccain@gmail.com">
            &gt;&gt; say hi <span className="font-dingbats">J</span> &lt;&lt;
          </a>
        </li>
      </div>
    </main>
  );
};

export default Layout;
