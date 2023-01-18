import classNames from "classnames";
import React from "react";

interface DetailViewProps {
  hidden: boolean;
  toggleSelf: () => void;
  children: JSX.Element;
  id: string;
}

const DetailView: React.FC<DetailViewProps> = ({
  hidden,
  toggleSelf,
  children,
  id,
}: DetailViewProps) => {
  return (
    <div
      className={classNames(
        hidden ? "text-[0px] opacity-0" : "p-2 pb-4 text-sm opacity-100 md:p-0",
        "detail-view flex scroll-mt-4 flex-col bg-white md:m-0 md:w-[550px]"
      )}>
      <button
        className={classNames(
          id === "about" ? "" : "mb-[-2rem]",
          "text-right text-xl md:hidden"
        )}
        onClick={toggleSelf}>
        X
      </button>
      {children}
      <button
        id={id}
        className="hover mt-4 mb-2 hidden self-center px-4 pt-3 pb-2 text-4xl md:block"
        onClick={toggleSelf}>
        X
      </button>
    </div>
  );
};

export default DetailView;
