import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "./nav";
import classNames from "classnames";
import DetailView from "./detailView";
import Portfolio from "./portfolio";
import MobilePlaceholder from "./mobilePlaceholder";
import Marquee from "./marquee";

const IndexPage: React.FC<PageProps> = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [showAboutMe, setShowAboutMe] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const [showPortfolio, setShowPortfolio] = React.useState(false);
  const [showForHire, setShowForHire] = React.useState(false);

  const makeRoomForText = showAboutMe || showContact || showForHire;

  const handleSetShowAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowContact(false);
    setShowPortfolio(false);
    setShowForHire(false);
  };

  const handleSetShowContact = () => {
    setShowContact(!showContact);
    setShowAboutMe(false);
    setShowPortfolio(false);
    setShowForHire(false);
  };

  const handleTogglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
    setShowAboutMe(false);
    setShowContact(false);
    setShowForHire(false);
  };

  const handleSetShowForHire = () => {
    setShowPortfolio(false);
    setShowAboutMe(false);
    setShowContact(false);
    setShowForHire(!showForHire);
  };

  // todo: get screen size and set `showNav` to true below 768px

  return (
    <main className="bg-[url('../assets/forest-floor.jpg')] bg-cover font-sans text-lilac-dark">
      <MobilePlaceholder />
      <Marquee hideSelf={!showNav} />
      <div className="relative hidden min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid md:grid-rows-3 xl:grid-cols-3">
        <div
          className={classNames(
            makeRoomForText
              ? "md:row-start-2 md:mt-[-100px]"
              : showPortfolio
              ? "mt-[-1.5rem] md:row-start-1"
              : "md:row-start-2",
            "justify-self-center",
            "flex h-fit w-fit flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:items-center md:p-10 xl:col-start-2"
          )}>
          <button
            className={classNames(
              showNav && !showPortfolio
                ? "cursor-default border-lilac bg-black text-lilac-muted-dark"
                : "hover bg-lilac-dark text-lilac-light",
              "m-12 my-4 h-10 whitespace-nowrap rounded-full border-2  px-10 text-left font-display transition-all duration-700 md:m-0 md:mb-4 md:h-auto md:text-center md:text-[6rem]"
            )}
            onClick={() => {
              setShowNav(true);
              showPortfolio && setShowPortfolio(false);
            }}>
            hannah joyce
          </button>
          {showAboutMe && (
            <DetailView hidden={!showAboutMe} toggleSelf={handleSetShowAboutMe}>
              <p className="text-justify md:m-4 md:text-2xl">
                is an artist, software engineer, and writer living in tucson,
                az. Much of her work explores the edges, overlaps, and
                juxtapositions between the human and non-human, the “natural”
                and “artificial.” She is equal parts luddite and cyborg
                futurist. Get in touch if you need a frontend software
                developer, want a poster designed, or wanna talk about GPT-3.
                stay safe out there xo
              </p>
            </DetailView>
          )}
          {showForHire && (
            <DetailView hidden={!showForHire} toggleSelf={handleSetShowForHire}>
              <>
                <p className="text-justify md:m-4 md:text-2xl">
                  is a senior full stack JavaScript / TypeScript developer with
                  particular expertise on the front end. She has over 5 years of
                  experience with React, is proficient with multiple CSS
                  libraries, and is comfortable dipping into the back end
                  whenever needed.
                </p>
                <p className="md:m-4 md:text-2xl">
                  HIRE HANNAH FOR...
                  <br /> - Coding & consulting
                  <br /> - React projects
                  <br /> - Frontend development projects
                  <br /> - Visual design work
                  <br /> - Portrait/painting commissions
                </p>
                {/* <a href="../assets/hannah-mccain-resume-2023.pdf" download>
                  Download Hannah's resumé.
                </a> */}
              </>
            </DetailView>
          )}
          <DetailView hidden={!showContact} toggleSelf={handleSetShowContact}>
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
        <Portfolio hidden={!showPortfolio} toggleSelf={handleTogglePortfolio} />
        {showNav && (
          <>
            <div
              className={classNames(
                showAboutMe ? "hidden md:flex" : "flex",
                "hidden items-end md:col-start-1 md:row-start-3 md:mb-24 md:flex"
              )}>
              <Nav
                toggleAbout={handleSetShowAboutMe}
                toggleContact={handleSetShowContact}
                togglePortfolio={handleTogglePortfolio}
              />
            </div>
            <button
              onClick={handleSetShowForHire}
              className={classNames(
                makeRoomForText ? "animate-none" : "animate-bounce",
                "hover mr-20 mb-16 w-fit self-end justify-self-end rounded-full border-2 border-lilac bg-black px-4 pb-2 pt-3 text-right text-3xl text-white md:col-start-1 md:row-start-3 lg:col-start-3"
              )}>
              FOR HIRE !!
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
