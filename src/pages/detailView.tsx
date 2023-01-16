import classNames from "classnames";
import React from "react";

interface DetailViewProps {
  hidden: boolean;
  toggleSelf: () => void;
  children: JSX.Element;
}

const DetailView: React.FC<DetailViewProps> = ({
  hidden,
  toggleSelf,
  children,
}: DetailViewProps) => {
  return (
    <div
      className={classNames(
        hidden ? "text-[0px] opacity-0" : "p-10 text-sm opacity-100 md:p-0",
        "flex flex-col bg-white transition-all duration-300 md:m-0 md:w-[550px]"
      )}>
      <button className="md:hidden" onClick={toggleSelf}>
        X
      </button>
      {children}
      <button
        className="hover mt-4 mb-2 hidden self-center px-4 pt-3 pb-2 text-4xl md:block"
        onClick={toggleSelf}>
        X
      </button>
    </div>
  );
};

export default DetailView;
