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
  const [hovering, setHovering] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setHovering(null));
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
      setHovering(hovered);
    }

    biographyTable?.addEventListener("mouseover", handleHover);

    return () => {
      biographyTable?.removeEventListener("mouseover", handleHover);
    };
  });

  return (
    <Layout>
      <div ref={ref} className="mb-16 mt-40 flex flex-col items-center lg:mt-0">
        <Image
          top="15%"
          left="30%"
          imageData={findImage(allFile, "hannah")}
          selfSelected={hovering === "hannah" && selected !== "hannah"}
        />
        <Image
          top="25%"
          left="45%"
          imageData={findImage(allFile, "writer")}
          selfSelected={hovering === "writer" && selected !== "writer"}
        />
        <Image
          top="20%"
          left="40%"
          imageData={findImage(allFile, "coder3")}
          selfSelected={hovering === "coder3" && selected !== "coder3"}
        />
        <Image
          top="30%"
          left="35%"
          imageData={findImage(allFile, "artist")}
          selfSelected={hovering === "artist" && selected !== "artist"}
        />
        <Image
          top="50%"
          left="60%"
          imageData={findImage(allFile, "tucson")}
          selfSelected={hovering === "tucson" && selected !== "tucson"}
        />
        <table
          id="bio-table"
          className="relative z-10 w-full cursor-pointer text-black md:text-4xl">
          <tbody>
            <tr className="border-y border-black">
              <td
                id="hannah"
                onClick={() =>
                  selected === "hannah"
                    ? setSelected(null)
                    : setSelected("hannah")
                }
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  hovering === "hannah" && selected !== "hannah"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                Hi, my name is Hannah !
                {selected === "hannah" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    Nice to meet you :)
                  </div>
                )}
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="writer"
                onClick={() =>
                  selected === "writer"
                    ? setSelected(null)
                    : setSelected("writer")
                }
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  hovering === "writer" && selected !== "writer"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                I'm a writer,
                {selected === "writer" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    I write mostly poetry, & I run a small indie poetry press
                    called Pansy Press.{" "}
                    <a
                      className="hover:underline"
                      href="https://www.pansy.press"
                      target="_blank"
                      rel="noopener noreferrer">
                      &gt;&gt; Check us out!
                    </a>
                  </div>
                )}
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="coder3"
                onClick={() =>
                  selected === "coder3"
                    ? setSelected(null)
                    : setSelected("coder3")
                }
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  hovering === "coder3" && selected !== "coder3"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                software developer,
                {selected === "coder3" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    I'm a full stack developer with particular expertise in the
                    front end. I have worked at startups & big companies; I've
                    worked on enterprise-scale B2B applications and I've built
                    small personal websites.
                    <br />
                    <br />
                    Whether it's making your app idea a reality, building you an
                    online portfolio, updating the SEO on your company's
                    website, or something else — I'd love to help you on your
                    next web development project &lt;3
                  </div>
                )}
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="artist"
                onClick={() =>
                  selected === "artist"
                    ? setSelected(null)
                    : setSelected("artist")
                }
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  hovering === "artist" && selected !== "artist"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                & artist
                {selected === "artist" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    Get in touch if you would like to commission a portrait!
                  </div>
                )}
              </td>
            </tr>

            <tr className="group w-full border-y border-black">
              <td
                id="artist-2"
                onClick={() =>
                  selected === "artist-2"
                    ? setSelected(null)
                    : setSelected("artist-2")
                }
                className={classNames(
                  "w-full py-4 text-left italic transition-colors md:pl-12",
                  hovering === "artist-2" && selected !== "artist-2"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                (of many kinds)
                <a
                  className={classNames(
                    selected === "artist-2"
                      ? "grou text-black"
                      : "text-white opacity-0 hover:text-black group-hover:opacity-100",
                    "ml-40 inline-block hover:underline"
                  )}
                  href="https://sonyabladeband.bandcamp.com/album/demo"
                  target="_blank"
                  rel="noopener noreferrer">
                  &gt;&gt; sonya blade
                </a>
                {selected === "artist-2" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    Also, unrelated but also creative, I'd love to do graphic
                    design work for you.
                  </div>
                )}
              </td>
            </tr>
            <tr className="border-y border-black">
              <td
                id="tucson"
                onClick={() =>
                  selected === "tucson"
                    ? setSelected(null)
                    : setSelected("tucson")
                }
                className={classNames(
                  "w-full py-4 text-left transition-colors",
                  hovering === "tucson" && selected !== "tucson"
                    ? "bg-black text-white"
                    : "bg-secondary text-black"
                )}>
                living in sunny Tucson, Arizona !
                {selected === "tucson" && (
                  <div
                    className={classNames(
                      "w-full py-4 pl-16 text-left text-2xl italic"
                    )}>
                    But I'm from the beautiful state of Maine :)
                  </div>
                )}
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
