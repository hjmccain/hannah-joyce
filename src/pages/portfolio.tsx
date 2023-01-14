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
  const [publishingSelected, setPublishingSelected] = React.useState(true);
  const [writingSelected, setWritingSelected] = React.useState(true);
  const [webSelected, setWebSelected] = React.useState(true);
  const [isBig, makeBig] = React.useState<false | string>(false);

  // todo: in order to get rid of "display:nonw" and use css transitions,
  // need to recalculate the screen height when portfolio is hidden
  // so that the scroll bar goes away.

  return (
    <div className="portfolio-transition text-3xl">
      <div
        className={classNames(
          !hidden
            ? "top-[200px] h-fit opacity-100"
            : "left-[-5000px] hidden h-0 opacity-0",
          "absolute z-30 flex w-full flex-row bg-red-200"
        )}>
        <nav className="min-h-[82vh] w-52 bg-red-300 p-4">
          <div className="sticky top-4 left-0">
            <h4 className="mb-4">FILTER</h4>
            <button
              className="block"
              onClick={() => setPosterSelected(!posterSelected)}>
              <span
                className={classNames(
                  posterSelected ? "visible" : "invisible"
                )}>
                {"x "}
              </span>
              poster
            </button>
            <button
              className="block"
              onClick={() => setPaintingSelected(!paintingSelected)}>
              <span
                className={classNames(
                  paintingSelected ? "visible" : "invisible"
                )}>
                {"x "}
              </span>
              painting
            </button>
            <button
              className="block"
              onClick={() => setPublishingSelected(!publishingSelected)}>
              <span
                className={classNames(
                  publishingSelected ? "visible" : "invisible"
                )}>
                {"x "}
              </span>
              publishing
            </button>
            <button
              className="block"
              onClick={() => setWritingSelected(!writingSelected)}>
              <span
                className={classNames(
                  writingSelected ? "visible" : "invisible"
                )}>
                {"x "}
              </span>
              writing
            </button>
            <button
              className="block"
              onClick={() => setWebSelected(!webSelected)}>
              <span
                className={classNames(webSelected ? "visible" : "invisible")}>
                {"x "}
              </span>
              web
            </button>
          </div>
        </nav>
        {/* <div className="m-4 grid w-full grid-cols-[repeat(auto-fill,_minmax(vw,_1fr))] gap-1"> */}
        <div className="m-px grid w-full grid-cols-4 gap-px">
          <button
            id="bassideDopeCobra"
            onClick={() =>
              makeBig(isBig === "bassideDopeCobra" ? false : "bassideDopeCobra")
            }
            className={classNames(
              isBig === "bassideDopeCobra"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="poemAndImage"
            onClick={() =>
              makeBig(isBig === "poemAndImage" ? false : "poemAndImage")
            }
            className={classNames(
              isBig === "poemAndImage"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="selfPortrait"
            onClick={() =>
              makeBig(isBig === "selfPortrait" ? false : "selfPortrait")
            }
            className={classNames(
              isBig === "selfPortrait"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="figure"
            onClick={() => makeBig(isBig === "figure" ? false : "figure")}
            className={classNames(
              isBig === "figure"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "figure" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/figure.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "figure" ? "m-4" : "m-0 mt-4")}>
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, variust.
            </div>
          </button>
          <button
            id="inTheGarden"
            onClick={() =>
              makeBig(isBig === "inTheGarden" ? false : "inTheGarden")
            }
            className={classNames(
              isBig === "inTheGarden"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="templetons"
            onClick={() =>
              makeBig(isBig === "templetons" ? false : "templetons")
            }
            className={classNames(
              isBig === "templetons"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
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
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="ismail"
            onClick={() => makeBig(isBig === "ismail" ? false : "ismail")}
            className={classNames(
              isBig === "ismail"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "ismail" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/ismail.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "ismail" ? "m-4" : "m-0 mt-4")}>
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, variust.
            </div>
          </button>
          <button
            id="nude"
            onClick={() => makeBig(isBig === "nude" ? false : "nude")}
            className={classNames(
              isBig === "nude"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "nude" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/nude.jpg" alt="" />
            </div>
            <div className={classNames(isBig === "nude" ? "m-4" : "m-0 mt-4")}>
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="pansyParty"
            onClick={() =>
              makeBig(isBig === "pansyParty" ? false : "pansyParty")
            }
            className={classNames(
              isBig === "pansyParty"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="theDistance"
            onClick={() =>
              makeBig(isBig === "theDistance" ? false : "theDistance")
            }
            className={classNames(
              isBig === "theDistance"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
          <button
            id="citrus"
            onClick={() => makeBig(isBig === "citrus" ? false : "citrus")}
            className={classNames(
              isBig === "citrus"
                ? "col-span-2"
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
              !paintingSelected && "hidden",
              "pulse flex flex-col justify-start bg-white p-4 text-left text-2xl transition-all duration-300"
            )}>
            <div className={classNames(isBig === "citrus" ? "" : "", "h-fit")}>
              <StaticImage src="../assets/portfolio/images/citrus.jpg" alt="" />
            </div>
            <div
              className={classNames(isBig === "citrus" ? "m-4" : "m-0 mt-4")}>
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
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
                : "col-span-1 row-span-1 grayscale hover:grayscale-0",
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
              Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
              arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
              bibendum, varius imperdiet.
            </div>
          </button>
        </div>
        <div className="sticky top-0 left-0 flex w-12 flex-col self-start pt-4">
          <button className="" onClick={toggleSelf}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;