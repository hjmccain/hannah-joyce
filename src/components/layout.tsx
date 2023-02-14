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
          "detail-view-transition flex w-full flex-col justify-self-center transition-all duration-500 md:mb-52"
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
      <div className="mt-[-40px] flex h-[40px] items-end text-xs">
        <p>
          This website uses the fonts{" "}
          <a
            href="https://velvetyne.fr/fonts/picnic/"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames()}>
            <span className=" text-primary transition-opacity delay-100 hover:text-4xl">
              PicNic
            </span>
          </a>
          {", "}
          <a
            href="https://fontesk.com/director-typeface/"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames()}>
            <span className=" text-primary transition-opacity delay-100 hover:text-4xl">
              Director
            </span>
          </a>
          , and{" "}
          <a
            href="https://velvetyne.fr/fonts/mr-pixel/"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames()}>
            <span className=" text-primary transition-opacity delay-100 hover:text-4xl">
              Mister Pixel Tools
            </span>
          </a>
          . Major thanks to the awesome open source foundries & non-Google font
          resources out there !
        </p>
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
