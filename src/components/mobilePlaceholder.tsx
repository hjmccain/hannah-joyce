import React from "react";
import DetailView from "../components/detailView";

const MobilePlaceholder = () => {
  return (
    <div className="block h-screen md:hidden">
      sorry, i haven't gotten around to making this website fully responsive.
      please use a larger screen (ipad or bigger) for the ~full experience~ ! if
      you want to get in touch with me (hannah), you can use the links below{" "}
      <span className="font-dingbats">J</span>
      <br />
      <br />
      <br />
      <DetailView id="mobile-contact" hidden={false} toggleSelf={() => null}>
        <nav className="mt-4 flex w-full flex-col text-3xl">
          <li className="hover list-none text-center">
            <a href="mailto:hannahjmccain@gmail.com">email</a>
          </li>
          <li className="hover list-none text-center">
            <a
              href="https://www.instagram.com/imaginary_hannah/"
              target="_blank"
              rel="noopener noreferrer">
              instagram
            </a>
          </li>
          <li className="hover list-none text-center">
            <a
              href="https://www.are.na/hannah-mccain"
              target="_blank"
              rel="noopener noreferrer">
              are.na
            </a>
          </li>
          <li className="hover list-none text-center">
            <a
              href="https://github.com/hjmccain"
              target="_blank"
              rel="noopener noreferrer">
              github
            </a>
          </li>
        </nav>
      </DetailView>
    </div>
  );
};

export default MobilePlaceholder;
