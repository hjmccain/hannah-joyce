import classNames from "classnames";
import React from "react";

interface NavProps {
  toggleAbout: () => void;
  toggleContact: () => void;
  togglePortfolio: () => void;
}

const Nav: React.FC<NavProps> = ({
  toggleAbout,
  toggleContact,
  togglePortfolio,
}: NavProps) => {
  return (
    <nav className="nav-transition group relative h-fit md:row-start-3 md:m-10 md:mb-16 md:content-end">
      <button className="hidden rotate-[-28deg] rounded-full border-2 border-lilac bg-black py-6 px-4 uppercase text-white opacity-100 duration-1000 group-hover:opacity-0 md:absolute md:bottom-[-66px] md:ml-0 md:block md:py-[3.6rem] md:px-[.8rem] md:text-5xl">
        menu
      </button>
      <div className="mb-10 block md:hidden">
        <button
          onClick={togglePortfolio}
          className={classNames("hover marquee-small block w-full bg-black")}>
          <div
            className="marquee-small__inner whitespace-nowrap"
            aria-hidden="true">
            <span>
              PORTFOLIO<span className="font-dingbats">J</span>
            </span>
            <span>
              PORTFOLIO<span className="font-dingbats">J</span>
            </span>
            <span>
              PORTFOLIO<span className="font-dingbats">J</span>
            </span>
            <span>
              PORTFOLIO<span className="font-dingbats">J</span>
            </span>
          </div>
        </button>
        <button
          onClick={toggleAbout}
          className={classNames("hover marquee-small block w-full bg-black")}>
          <div
            className="marquee-small__inner whitespace-nowrap"
            aria-hidden="true">
            <span>
              ABOUT<span className="font-dingbats">J</span>
            </span>
            <span>
              ABOUT<span className="font-dingbats">J</span>
            </span>
            <span>
              ABOUT<span className="font-dingbats">J</span>
            </span>
            <span>
              ABOUT<span className="font-dingbats">J</span>
            </span>
          </div>
        </button>
        <button
          onClick={toggleContact}
          className={classNames("hover marquee-small block w-full bg-black")}>
          <div
            className="marquee-small__inner whitespace-nowrap"
            aria-hidden="true">
            <span>
              CONTACT<span className="font-dingbats">J</span>
            </span>
            <span>
              CONTACT<span className="font-dingbats">J</span>
            </span>
            <span>
              CONTACT<span className="font-dingbats">J</span>
            </span>
            <span>
              CONTACT<span className="font-dingbats">J</span>
            </span>
          </div>
        </button>
      </div>
      <div className="hidden md:mt-0 md:block md:opacity-0 group-hover:md:opacity-100">
        <button
          onClick={togglePortfolio}
          className={classNames(
            "bottom-[-66px] z-20 w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[65deg] md:absolute md:ml-0 md:w-40 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[65deg]"
          )}>
          <span className="pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100 md:opacity-0">
            portfolio
          </span>
        </button>
        <button
          onClick={toggleAbout}
          className={classNames(
            "-5xl-xl md:-5xl-5xl bottom-[-66px] z-10 w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[32deg] md:absolute md:ml-0 md:w-40 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]"
          )}>
          <span className="ml-8 pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100 md:opacity-0">
            about
          </span>
        </button>
        <button
          onClick={toggleContact}
          className="-5xl-right -5xl-xl bottom-[-66px] w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 duration-1000 hover:bg-lilac-light group-hover:w-72 md:absolute md:ml-0 md:w-40 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem]">
          <span className="ml-16 pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100 md:opacity-0">
            contact
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
