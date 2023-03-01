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
            "md:m-0 md:mb-12 md:w-auto md:text-bigger"
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
      <div className="mb-12 flex w-full justify-end pr-12">
        <li className="flex h-[150px] w-[150px] place-items-center rounded-full border-2 border-white bg-primary text-2xl text-white hover:bg-black">
          <a
            className="w-full text-center"
            href="mailto:hannahjmccain@gmail.com">
            send an email
          </a>
        </li>
      </div>
      <div className="items-end pb-2 text-xs">
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
          . Major thanks to the awesome open source foundries & non-Google free
          font resources out there !
        </p>
      </div>
    </main>
  );
};

export default Layout;
