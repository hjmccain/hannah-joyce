import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "./nav";
import classNames from "classnames";
import DetailView from "./detailView";
import { StaticImage } from "gatsby-plugin-image";
import Portfolio from "./portfolio";

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
      <div className="block md:hidden">
        sorry, i haven't gotten around to making this website responsive. please
        use a larger screen for the ~full experience~ ! if you want to get in
        touch, use the links below <span className="font-dingbats">J</span>
      </div>
      <div
        className={classNames(
          showNav ? "visible" : "invisible",
          "marquee w-full bg-black text-base"
        )}>
        <div className="marquee__inner whitespace-nowrap" aria-hidden="true">
          <span className="w-[45rem] whitespace-nowrap text-center">
            this website is a work in progress{" "}
            <span className="font-dingbats">J</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            but who among us is not a work in progress?{" "}
            <span className="font-dingbats">V</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            this website is a work in progress{" "}
            <span className="font-dingbats">J</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            but who among us is not a work in progress?{" "}
            <span className="font-dingbats">V</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            this website is a work in progress{" "}
            <span className="font-dingbats">J</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            but who among us is not a work in progress?{" "}
            <span className="font-dingbats">V</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            this website is a work in progress{" "}
            <span className="font-dingbats">J</span>
          </span>
          <span className="w-[45rem] whitespace-nowrap text-center">
            but who among us is not a work in progress?{" "}
            <span className="font-dingbats">V</span>
          </span>
        </div>
      </div>
      <div className="relative grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid-rows-3 xl:grid-cols-3">
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
                is a software developer and poet who bleh blah blo blu blah
                ipsum dolor sit amet, con sectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </DetailView>
          )}
          {showForHire && (
            <DetailView hidden={!showForHire} toggleSelf={handleSetShowForHire}>
              <p className="text-justify md:m-4 md:text-2xl">
                is for hire! hire me lol bleh blah blo blu blah ipsum dolor sit
                amet, con sectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </DetailView>
          )}
          {showContact && (
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
          )}
        </div>
        <Portfolio hidden={!showPortfolio} toggleSelf={handleTogglePortfolio} />
        {showNav && (
          <>
            <div
              className={classNames(
                showAboutMe ? "hidden md:flex" : "flex",
                "flex items-end md:col-start-1 md:row-start-3 md:mb-24"
              )}>
              <Nav
                toggleAbout={handleSetShowAboutMe}
                toggleContact={handleSetShowContact}
                togglePortfolio={handleTogglePortfolio}
              />
            </div>
            <button
              onClick={handleSetShowForHire}
              className="hover mr-20 mb-16 w-fit self-end justify-self-end rounded-full border-2 border-lilac bg-black px-4 pb-2 pt-3 text-right text-3xl text-white md:col-start-3 md:row-start-3">
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
