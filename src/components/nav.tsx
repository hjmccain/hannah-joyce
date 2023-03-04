import classNames from "classnames";
import React, { Dispatch } from "react";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}: NavProps) => {
  return (
    <nav className="nav-transition group relative z-10 h-fit md:rotate-[52deg]">
      <a
        className={classNames(
          "hidden rotate-[-28deg] rounded-full border-2 border-white bg-primary py-6 px-4 uppercase text-white opacity-100 duration-1000 group-hover:opacity-0",
          "md:absolute md:bottom-[-66px] md:ml-0 md:block md:py-[3.6rem] md:px-[.8rem] md:text-4xl"
        )}>
        links
      </a>
      <MobileNav />
      <div className="hidden text-black md:mt-0 md:block md:opacity-0 group-hover:md:opacity-100">
        <a
          href="https://www.instagram.com/imaginary_hannah/"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(
            "bottom-[-66px] z-20 w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 hover:bg-black hover:text-white group-hover:w-72 group-hover:rotate-[65deg]",
            "md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[65deg]"
          )}>
          <span className="pl-44 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
            instagram
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/hjmccain/"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(
            "-5xl-xl md:-5xl-5xl bottom-[-66px] z-10 w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 hover:bg-black hover:text-white  group-hover:w-72 group-hover:rotate-[32deg]",
            "md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]"
          )}>
          <span className="ml-8 pl-52 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
            linkedin
          </span>
        </a>
        <a
          href="https://www.are.na/hannah-mccain"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(
            "-5xl-right -5xl-xl bottom-[-66px] w-full origin-[40px_40px] rounded-full border-2 border-black bg-white py-6 duration-1000 hover:bg-black hover:text-white group-hover:w-72",
            "md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem]"
          )}>
          <span className="ml-16 pl-52 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
            are.na
          </span>
        </a>
      </div>
    </nav>
  );
};

const MobileNav = ({}: {}) => {
  return (
    <div className="mb-12 md:hidden">
      Sorry, the mobile version of this site currently kinda sucks, and maybe
      always will. Find me on{" "}
      <a
        href="https://www.instagram.com/imaginary_hannah/"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames()}>
        <span className="text-xs uppercase underline transition-opacity delay-100 hover:no-underline group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
          instagram
        </span>
      </a>{" "}
      @imaginary_hannah… U know, that format is perfect for phones{" "}
      <span className="font-dingbats">J</span> !!
    </div>
  );
  // return (
  //   <div className="mb-10 block md:hidden">
  //     <button
  //       onClick={() => null}
  //       className={classNames("hover marquee-small block w-full bg-black")}>
  //       <div
  //         className="marquee-small__inner whitespace-nowrap"
  //         aria-hidden="true">
  //         <span>
  //           PORTFOLIO<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           PORTFOLIO<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           PORTFOLIO<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           PORTFOLIO<span className="font-dingbats">J</span>
  //         </span>
  //       </div>
  //     </button>
  //     <button
  //       onClick={() => null}
  //       className={classNames("hover marquee-small block w-full bg-black")}>
  //       <div
  //         className="marquee-small__inner whitespace-nowrap"
  //         aria-hidden="true">
  //         <span>
  //           ABOUT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           ABOUT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           ABOUT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           ABOUT<span className="font-dingbats">J</span>
  //         </span>
  //       </div>
  //     </button>
  //     <button
  //       onClick={() => null}
  //       className={classNames("hover marquee-small block w-full bg-black")}>
  //       <div
  //         className="marquee-small__inner whitespace-nowrap"
  //         aria-hidden="true">
  //         <span>
  //           CONTACT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           CONTACT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           CONTACT<span className="font-dingbats">J</span>
  //         </span>
  //         <span>
  //           CONTACT<span className="font-dingbats">J</span>
  //         </span>
  //       </div>
  //     </button>
  //   </div>
  // );
};

export default Nav;

/* <a
href=""
target="_blank"
rel="noopener noreferrer"
className={classNames(
  "bottom-[-66px] z-20 w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[65deg] md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[65deg]"
)}>
<span className="pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
  portfolio
</span>
</a>
<a
href=""
target="_blank"
rel="noopener noreferrer"
className={classNames(
  "-5xl-xl md:-5xl-5xl bottom-[-66px] z-10 w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[32deg] md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]"
)}>
<span className="ml-8 pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
  about
</span>
</a>
<a
href=""
target="_blank"
rel="noopener noreferrer"
className={classNames(
  "-5xl-xl md:-5xl-5xl bottom-[-66px] z-10 w-full origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 md:absolute md:ml-0 md:w-40 md:origin-[78px_78px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]"
)}>
<span className="ml-8 pl-32 text-xs uppercase transition-opacity delay-100 group-hover:text-4xl group-hover:opacity-100 md:opacity-0">
  about
</span>
</a> */
