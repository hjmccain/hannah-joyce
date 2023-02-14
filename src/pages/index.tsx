import React, { useEffect, useRef, useState } from "react";
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import type FileTypes from "gatsby-source-filesystem";
import classNames from "classnames";
import useOutsideClick from "../hooks/outsideClick";

export type AllFile = {
  edges: Array<Record<"node", FileTypes.FileSystemNode>>;
};

const Index: React.FC<PageProps> = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setSelected(null));
  const { allFile } = useStaticQuery(graphql`
    query imageQuery {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const biographyTable = document.getElementById("bio-table");

    function handleHover(e: MouseEvent) {
      const hovered = (e.target as HTMLButtonElement)?.id;
      console.log("hovered!");

      setSelected(hovered);
    }

    biographyTable?.addEventListener("mouseover", handleHover);

    return () => {
      biographyTable?.removeEventListener("mouseover", handleHover);
    };
  });

  return (
    <Layout>
      <div ref={ref} className="mb-48 flex flex-col items-center">
        <Image
          top="15%"
          left="30%"
          imageData={findImage(allFile, "hannah")}
          selfSelected={selected === "hannah"}
        />
        <Image
          top="25%"
          left="45%"
          imageData={findImage(allFile, "writer")}
          selfSelected={selected === "writer"}
        />
        <Image
          top="20%"
          left="40%"
          imageData={findImage(allFile, "coder")}
          selfSelected={selected === "coder"}
        />
        <Image
          top="30%"
          left="35%"
          imageData={findImage(allFile, "artist")}
          selfSelected={selected === "artist"}
        />
        <Image
          top="50%"
          left="60%"
          imageData={findImage(allFile, "tucson")}
          selfSelected={selected === "tucson"}
        />
        <table
          id="bio-table"
          className="relative z-10 w-full cursor-pointer text-black md:text-4xl">
          <tbody>
            <tr className="border-y border-black">
              <td
                id="hannah"
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  selected === "hannah"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                Hi, my name is Hannah !
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="writer"
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  selected === "writer"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                I'm a writer,
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="coder"
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  selected === "coder"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                software developer,
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="artist"
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  selected === "artist"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                & artist
              </td>
            </tr>
            <tr className="group w-full border-y border-black">
              <td
                id="artist-2"
                className={classNames(
                  "w-full py-4 text-left italic transition-colors md:pl-12",
                  selected === "artist-2"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                (of many kinds)
                <a
                  className="ml-40 inline-block text-white opacity-0 hover:text-black hover:underline group-hover:opacity-100"
                  href="https://sonyabladeband.bandcamp.com/album/demo"
                  target="_blank"
                  rel="noopener noreferrer">
                  &gt;&gt; sonya blade
                </a>
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="tucson"
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  selected === "tucson"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                living in sunny Tucson, Arizona !
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

const Image = ({
  top,
  left,
  imageData,
  selfSelected,
}: {
  top: string;
  left: string;
  imageData: IGatsbyImageData | null;
  selfSelected: boolean;
}) => {
  if (imageData) {
    return (
      <div
        style={{
          top,
          left,
        }}
        className={classNames(
          selfSelected ? "z-30 opacity-100" : "z-0 opacity-0",
          "absolute md:w-1/3"
        )}>
        <GatsbyImage image={imageData} alt="" className="" />
      </div>
    );
  }

  return null;
};

export function findImage(
  files: AllFile,
  stringToMatch: string
): IGatsbyImageData | null {
  const imageData = files.edges.find(
    (node) => node.node.name === stringToMatch
  );

  const data = imageData?.node;
  return data ? getImage(data) || null : null;
}

export default Index;

export const Head: HeadFC = () => <title>Home Page</title>;
