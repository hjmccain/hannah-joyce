import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "./nav";
import classNames from "classnames";
import DetailView from "./detailView";
import Portfolio from "./portfolio";
// import MobilePlaceholder from "./mobilePlaceholder";
import Marquee from "./marquee";
// @ts-ignore
import resume from "../assets/hannah-mccain-resume-2023.pdf";

const IndexPage: React.FC<PageProps> = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [showAboutMe, setShowAboutMe] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const [showPortfolio, setShowPortfolio] = React.useState(false);
  const [showForHire, setShowForHire] = React.useState(false);

  const makeRoomForText = showAboutMe || showContact || showForHire;

  React.useEffect(() => {
    const id = showContact
      ? "contact"
      : showForHire
      ? "hire"
      : showAboutMe
      ? "about"
      : "marquee";
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [makeRoomForText]);

  React.useEffect(() => {
    const w = screen.width;
    if (w < 768) {
      setShowNav(true);
    }
  }, []);

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

  return (
    <main className="bg-[#9da693] bg-[url('../assets/forest-floor.jpg')] bg-cover font-sans text-lilac-dark transition-[background]">
      <Marquee hideSelf={!showNav} />
      <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden md:grid md:grid-cols-1 md:grid-rows-3 md:items-start md:gap-4 md:overflow-auto xl:grid-cols-3">
        <div
          className={classNames(
            makeRoomForText
              ? "md:row-start-2 md:mt-[-100px]"
              : showPortfolio
              ? "md:row-start-1 md:mt-[-1.5rem]"
              : "md:row-start-2",
            "justify-self-center",
            "detail-view-transition flex h-fit w-full flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:w-fit md:items-center md:p-10 xl:col-start-2"
          )}>
          <button
            className={classNames(
              showNav && !showPortfolio
                ? "cursor-default border-lilac bg-black text-lilac-muted-dark"
                : "hover bg-lilac-dark text-lilac-light",
              "h-40 w-full px-10 text-center font-display text-6xl transition-all duration-700 md:m-0 md:my-4 md:mb-4 md:h-36 md:w-auto md:whitespace-nowrap md:rounded-full md:border-2 md:text-[6rem]"
            )}
            onClick={() => {
              setShowNav(true);
              showPortfolio && setShowPortfolio(false);
            }}>
            HANNAH JOYCE
          </button>
          {showAboutMe && (
            <DetailView
              id="about"
              hidden={!showAboutMe}
              toggleSelf={handleSetShowAboutMe}>
              <>
                <p className="text-justify text-lg text-black md:m-4 md:text-xl">
                  is an artist, software engineer, and writer living in Tucson,
                  AZ. Much of her work explores the edges, overlaps, and
                  juxtapositions between the human and non-human, the “natural”
                  and “artificial.” She is equal parts luddite and cyborg
                  futurist. Get in touch{" "}
                  <span
                    onClick={handleSetShowForHire}
                    role="button"
                    className="hover cursor-pointer underline">
                    if you need a frontend software developer
                  </span>
                  , want a poster designed, or wanna talk about GPT-3 or poetry
                  (or both!). Stay safe out there xo :)
                </p>
              </>
            </DetailView>
          )}
          {showForHire && (
            <DetailView
              id="hire"
              hidden={!showForHire}
              toggleSelf={handleSetShowForHire}>
              <>
                <a
                  className="hover mt-4 self-center rounded-full border-2 border-lilac-light bg-lilac-dark px-2 py-1 text-lilac-extra-light"
                  href={resume}
                  download>
                  &gt;&gt; Download Hannah's resumé. &lt;&lt;
                </a>
                <p className="m-4 bg-lilac-light py-8 text-center text-lilac-dark md:text-xl">
                  <span className="underline">HIRE HANNAH FOR</span>
                  <br />
                  Coding & consulting
                  <br />
                  React projects
                  <br />
                  Frontend development projects
                  <br />
                  Visual design work
                  <br />
                  Portrait/painting commissions
                </p>
                <button
                  className="hover self-center rounded-full border-2 border-lilac-light bg-lilac-dark px-2 py-1 text-lilac-extra-light"
                  onClick={handleSetShowContact}>
                  Get in touch!
                </button>
              </>
            </DetailView>
          )}
          {showContact && (
            <DetailView
              id="contact"
              hidden={!showContact}
              toggleSelf={handleSetShowContact}>
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
          <div className="flex h-full flex-col md:sticky md:bottom-16 md:col-span-1 md:col-start-1 md:row-start-3 md:mb-16 md:flex md:h-0 md:w-full md:flex-row md:justify-between md:self-end lg:col-span-3 lg:col-start-1">
            <div className={classNames("flex items-end")}>
              <Nav
                toggleAbout={handleSetShowAboutMe}
                toggleContact={handleSetShowContact}
                togglePortfolio={handleTogglePortfolio}
              />
            </div>
            <button
              onClick={handleSetShowForHire}
              className={classNames(
                makeRoomForText ? "animate-none" : "md:animate-bounce",
                "hover rounded-full bg-black px-4 pb-2 pt-3 text-3xl text-white motion-reduce:animate-none md:mr-20 md:w-fit md:self-end md:justify-self-end md:border-2 md:border-lilac md:text-right"
              )}>
              FOR HIRE !!
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
