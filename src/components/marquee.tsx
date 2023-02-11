import classNames from "classnames";
import React from "react";

interface MarqueeProps {
  hideSelf: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ hideSelf }: MarqueeProps) => {
  return (
    <div
      id="marquee"
      className={classNames(
        hideSelf ? "invisible" : "visible",
        "marquee hidden w-full bg-black motion-reduce:invisible md:block"
      )}>
      <div className="marquee__inner whitespace-nowrap" aria-hidden="true">
        <span className="w-[55rem] whitespace-nowrap text-center">
          this website is a work in progress{" "}
          <span className="font-dingbats">J</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          check back for updates to the portfolio{" "}
          <span className="font-dingbats">V</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          hope ur having a great day !
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          this website is a work in progress{" "}
          <span className="font-dingbats">J</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          check back for updates to the portfolio{" "}
          <span className="font-dingbats">V</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          hope ur having a great day !
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          this website is a work in progress{" "}
          <span className="font-dingbats">J</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          check back for updates to the portfolio{" "}
          <span className="font-dingbats">V</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          hope ur having a great day !
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          this website is a work in progress{" "}
          <span className="font-dingbats">J</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          check back for updates to the portfolio{" "}
          <span className="font-dingbats">V</span>
        </span>
        <span className="w-[55rem] whitespace-nowrap text-center">
          hope ur having a great day !
        </span>
      </div>
    </div>
  );
};

export default Marquee;
