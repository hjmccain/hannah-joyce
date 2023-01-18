import classNames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface PortfolioProps {
  hidden: boolean;
  toggleSelf: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({
  hidden,
  toggleSelf,
}: PortfolioProps) => {
  const [posterSelected, setPosterSelected] = React.useState(true);
  const [paintingSelected, setPaintingSelected] = React.useState(true);
  // const [publishingSelected, setPublishingSelected] = React.useState(true);
  const [writingSelected, setWritingSelected] = React.useState(true);
  // const [webSelected, setWebSelected] = React.useState(true);
  const [isBig, makeBig] = React.useState<false | string>(false);

  // todo: in order to get rid of "display:none" and use css transitions,
  // need to recalculate the screen height when portfolio is hidden
  // so that the scroll bar goes away.

  return (
    <div className="portfolio-transition text-3xl md:col-start-1">
      <div
        className={classNames(
          !hidden
            ? "h-fit opacity-100 md:top-[200px]"
            : "hidden h-0 opacity-0 md:left-[-5000px]",
          "z-30 flex w-full flex-row border border-lilac-dark bg-lilac-dark md:absolute"
        )}>
        <nav className="hidden min-h-[90vh] w-[20rem] p-4 text-3xl text-white md:block xl:text-4xl">
          <div className="sticky top-4 left-0">
            <h4 className="mb-4">FILTER</h4>
            <div className="group flex flex-row items-center">
              <button onClick={() => setPosterSelected(!posterSelected)}>
                <span
                  className={classNames(
                    posterSelected ? "visible" : "invisible"
                  )}>
                  {"x "}
                </span>
                <span className="hover rounded-full border-2 border-lilac-light bg-lilac-muted-dark">
                  poster
                </span>
              </button>
              <button
                className="hover ml-2 mt-[2px] hidden h-fit rounded-full border-2 border-lilac-light bg-lilac-muted-dark py-px px-2 text-sm group-hover:inline-block xl:ml-4 xl:text-base"
                onClick={() => {
                  setPosterSelected(true);
                  setPaintingSelected(false);
                  setWritingSelected(false);
                }}>
                only
              </button>
            </div>
            <div className="group flex flex-row items-center">
              <button onClick={() => setPaintingSelected(!paintingSelected)}>
                <span
                  className={classNames(
                    paintingSelected ? "visible" : "invisible"
                  )}>
                  {"x "}
                </span>
                <span className="hover rounded-full border-2 border-lilac-light bg-lilac-muted-dark">
                  painting
                </span>
              </button>
              <button
                className="hover ml-2 mt-[2px] hidden h-fit rounded-full border-2 border-lilac-light bg-lilac-muted-dark py-px px-2 text-sm group-hover:inline-block xl:ml-4 xl:text-base"
                onClick={() => {
                  setPosterSelected(false);
                  setPaintingSelected(true);
                  setWritingSelected(false);
                }}>
                only
              </button>
            </div>
            <div className="group flex flex-row items-center">
              <button onClick={() => setWritingSelected(!writingSelected)}>
                <span
                  className={classNames(
                    writingSelected ? "visible" : "invisible"
                  )}>
                  {"x "}
                </span>
                <span className="hover rounded-full border-2 border-lilac-light bg-lilac-muted-dark">
                  writing
                </span>
              </button>
              <button
                className="hover ml-2 mt-[2px] hidden h-fit rounded-full border-2 border-lilac-light bg-lilac-muted-dark py-px px-2 text-sm group-hover:inline-block xl:ml-4 xl:text-base"
                onClick={() => {
                  setPosterSelected(false);
                  setPaintingSelected(false);
                  setWritingSelected(true);
                }}>
                only
              </button>
            </div>
          </div>
        </nav>
        <div className="grid w-full grid-cols-1 gap-px bg-lilac-dark lg:grid-cols-3 xl:grid-cols-4">
          <button
            id="inTheGarden"
            onClick={() =>
              makeBig(isBig === "inTheGarden" ? false : "inTheGarden")
            }
            className={classNames(
              isBig === "inTheGarden" ? "col-span-2" : "col-span-1 row-span-1",
              !writingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "inTheGarden" ? "h-[100rem]" : "m-0 h-96",
                "overflow-scroll"
              )}>
              <StaticImage
                src="../assets/portfolio/images/in-the-garden.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "inTheGarden" ? "m-4" : "m-0 mt-4"
              )}>
              Poem about AI and God published in issue #3 of the{" "}
              <a
                className="text-blue-500 hover:text-blue-600"
                href="https://www.tiltedhouse.org/the-review"
                target="_blank"
                rel="noopener noreferrer">
                Tilted House Review
              </a>
              . The epitaph was written by GPT-2, using the poem as a prompt.
            </div>
          </button>
          <button
            id="poemAndImage"
            onClick={() =>
              makeBig(isBig === "poemAndImage" ? false : "poemAndImage")
            }
            className={classNames(
              isBig === "poemAndImage" ? "col-span-2" : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "poemAndImage" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/poem-and-image.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "poemAndImage" ? "m-4" : "m-0 mt-4"
              )}>
              Flyer for a poetry workshop hosted by Pansy Press.
            </div>
          </button>
          <button
            id="selfPortrait"
            onClick={() =>
              makeBig(isBig === "selfPortrait" ? false : "selfPortrait")
            }
            className={classNames(
              isBig === "selfPortrait" ? "col-span-2" : "col-span-1 row-span-1",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "selfPortrait" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/self-portrait.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "selfPortrait" ? "m-4" : "m-0 mt-4"
              )}>
              Part of a series of self-portraits of selfies: an exploration of
              the female gaze upon itself.
            </div>
          </button>
          <button
            id="figure"
            onClick={() => makeBig(isBig === "figure" ? false : "figure")}
            className={classNames(
              isBig === "figure" ? "col-span-2" : "col-span-1 row-span-1",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "figure" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/figure.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "figure" ? "m-4" : "m-0 mt-4")}>
              Portait of a friend.
            </div>
          </button>
          <button
            id="bassideDopeCobra"
            onClick={() =>
              makeBig(isBig === "bassideDopeCobra" ? false : "bassideDopeCobra")
            }
            className={classNames(
              isBig === "bassideDopeCobra"
                ? "col-span-2"
                : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "bassideDopeCobra" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/basside-dope-cobra.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "bassideDopeCobra" ? "m-4" : "m-0 mt-4"
              )}>
              Show flyer.
            </div>
          </button>
          <button
            id="templetons"
            onClick={() =>
              makeBig(isBig === "templetons" ? false : "templetons")
            }
            className={classNames(
              isBig === "templetons" ? "col-span-2" : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(isBig === "templetons" ? "" : "", "h-fit")}>
              <StaticImage
                src="../assets/portfolio/images/templetons-reopening-color.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "templetons" ? "m-4" : "m-0 mt-4"
              )}>
              Flyer for an event at local venue.
            </div>
          </button>
          <button
            id="inThisEconomy"
            onClick={() =>
              makeBig(isBig === "inThisEconomy" ? false : "inThisEconomy")
            }
            className={classNames(
              isBig === "inThisEconomy"
                ? "col-span-2"
                : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "inThisEconomy" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/in-this-economy.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "inThisEconomy" ? "m-4" : "m-0 mt-4"
              )}>
              Tour poster.
            </div>
          </button>
          <button
            id="ismail"
            onClick={() => makeBig(isBig === "ismail" ? false : "ismail")}
            className={classNames(
              isBig === "ismail" ? "col-span-2" : "col-span-1 row-span-1",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "ismail" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/ismail.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "ismail" ? "m-4" : "m-0 mt-4")}>
              Portrait of a friend.
            </div>
          </button>
          <button
            id="nude"
            onClick={() => makeBig(isBig === "nude" ? false : "nude")}
            className={classNames(
              isBig === "nude" ? "col-span-2" : "col-span-1 row-span-1",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "nude" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/nude.jpg" alt="" />
            </div>
            <div className={classNames(isBig === "nude" ? "m-4" : "m-0 mt-4")}>
              Portrait sketch from a life drawing session.
            </div>
          </button>
          <button
            id="pansyParty"
            onClick={() =>
              makeBig(isBig === "pansyParty" ? false : "pansyParty")
            }
            className={classNames(
              isBig === "pansyParty" ? "col-span-2" : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(isBig === "pansyParty" ? "" : "", "h-fit")}>
              <StaticImage
                src="../assets/portfolio/images/pansy-press-party.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "pansyParty" ? "m-4" : "m-0 mt-4"
              )}>
              Flyer for a Pansy Press poetry reading.
            </div>
          </button>
          <button
            id="theDistance"
            onClick={() =>
              makeBig(isBig === "theDistance" ? false : "theDistance")
            }
            className={classNames(
              isBig === "theDistance" ? "col-span-2" : "col-span-1 row-span-1",
              !writingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "theDistance" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/the-distance.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "theDistance" ? "m-4" : "m-0 mt-4"
              )}>
              Poem published by Tiger Dingsun as part of his{" "}
              <a
                className="text-blue-500 hover:text-blue-600"
                href="https://tdingsun.github.io/reading-machines/"
                target="_blank"
                rel="noopener noreferrer">
                Reading Machines
              </a>{" "}
              project. Visit the website to see the animation he coded to
              portray my poem in a "non-teleological" fashion.
            </div>
          </button>
          <button
            id="citrus"
            onClick={() => makeBig(isBig === "citrus" ? false : "citrus")}
            className={classNames(
              isBig === "citrus" ? "col-span-2" : "col-span-1 row-span-1",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "citrus" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/citrus.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "citrus" ? "m-4" : "m-0 mt-4")}>
              Still life of backyard citrus.
            </div>
          </button>
          <button
            id="treasureMammal"
            onClick={() =>
              makeBig(isBig === "treasureMammal" ? false : "treasureMammal")
            }
            className={classNames(
              isBig === "treasureMammal"
                ? "col-span-2"
                : "col-span-1 row-span-1",
              !posterSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div
              className={classNames(
                isBig === "treasureMammal" ? "" : "",
                "h-fit"
              )}>
              <StaticImage
                src="../assets/portfolio/images/treasure-mammal-1.jpg"
                alt=""
              />
            </div>
            <div
              className={classNames(
                isBig === "treasureMammal" ? "m-4" : "m-0 mt-4"
              )}>
              Show poster.
            </div>
          </button>
        </div>
        <div className="hover sticky top-0 left-0 flex w-20 flex-col self-start pt-4 pb-1 text-5xl text-white">
          <button className="" onClick={toggleSelf}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
