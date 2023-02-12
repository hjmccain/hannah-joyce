import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const About: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p className="col-start-3 row-start-2 text-justify text-lg text-black md:m-4 md:text-2xl">
        is an artist, software engineer, and writer living in Tucson, AZ. Much
        of her creative work explores the edges, overlaps, and juxtapositions
        between the human and non-human, the “natural” and “artificial.” She is
        equal parts luddite and cyborg futurist.{" "}
        <a
          href="mailto:hannahjmccain@gmail.com"
          className="hover cursor-pointer underline">
          Email her
        </a>{" "}
        if you need a frontend software developer, want a poster designed, or
        wanna talk about GPT-3 or poetry (or both!). Stay safe out there xo :)
      </p>
    </Layout>
  );
};

export default About;

export const Head: HeadFC = () => <title>About Me Page</title>;
