import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import classNames from "classnames";

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <nav
        className={classNames(
          "col-start-2 row-start-2 text-justify text-lg text-black md:text-4xl",
          "mt-24 flex w-full flex-col text-3xl"
        )}>
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
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => <title>Contact & Info Page</title>;
