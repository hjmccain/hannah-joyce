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
  const ref = useRef<HTMLTableElement>(null);
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
      setSelected(hovered);
    }

    biographyTable?.addEventListener("mouseover", handleHover);

    return () => {
      biographyTable?.removeEventListener("mouseover", handleHover);
    };
  });

  return (
    <Layout>
      <div className="mb-48 flex flex-col items-center">
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-1")}
          selfSelected={selected === "item-1"}
        />
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-2")}
          selfSelected={selected === "item-2"}
        />
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-3")}
          selfSelected={selected === "item-3"}
        />
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-4")}
          selfSelected={selected === "item-4"}
        />
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-5")}
          selfSelected={selected === "item-5"}
        />
        <Image
          top={0}
          left={0}
          imageData={findImage(allFile, "item-6")}
          selfSelected={selected === "item-6"}
        />
        <table ref={ref} id="bio-table" className="w-full text-4xl text-black">
          <tr className="border-y border-black">
            <td
              id="item-1"
              className="w-full py-4 text-left transition-colors hover:bg-black hover:text-white">
              Hi, my name is Hannah !
            </td>
          </tr>
          <tr className="border-y border-black">
            <td
              id="item-2"
              className="w-full py-4 text-left transition-colors hover:bg-black hover:text-white">
              I'm a writer,
            </td>
          </tr>
          <tr className="border-y border-black">
            <td
              id="item-3"
              className="w-full py-4 text-left transition-colors hover:bg-black hover:text-white">
              software developer
            </td>
          </tr>
          <tr className="border-y border-black">
            <td
              id="item-4"
              className="w-full py-4 text-left transition-colors hover:bg-black hover:text-white">
              & artist
            </td>
          </tr>
          <tr className="border-y border-black">
            <td
              id="item-5"
              className="w-full py-4 pl-12 text-left italic transition-colors hover:bg-black hover:text-white">
              (of many kinds)
            </td>
          </tr>
          <tr className="border-y border-black">
            <td
              id="item-6"
              className="w-full py-4 text-left transition-colors hover:bg-black hover:text-white">
              living in sunny Tucson, Arizona !
            </td>
          </tr>
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
  top: number;
  left: number;
  imageData: IGatsbyImageData | null;
  selfSelected: boolean;
}) => {
  console.log(selfSelected);

  if (imageData) {
    return (
      <div
        className={classNames(
          selfSelected ? "z-30 opacity-100" : "opacity-0",
          "relative w-24"
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
