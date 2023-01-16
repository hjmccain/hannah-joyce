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

  console.log({ showNav });

  return (
    <main className="relative grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 bg-lilac-extra-light font-display text-lilac-dark md:grid-rows-3 xl:grid-cols-3">
      <div
        className={classNames(
          makeRoomForText
            ? "md:row-start-2 md:mt-[-100px]"
            : showPortfolio
            ? "mt-10 md:row-start-1"
            : "md:row-start-2",
          "flex h-fit w-fit flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:mx-auto md:items-center md:p-10 xl:col-start-2"
        )}>
        <button
          className={classNames(
            showNav && !showPortfolio ? "cursor-default" : "hover",
            "m-12 my-4 h-10 whitespace-nowrap text-left md:m-0 md:mb-4 md:h-auto md:text-center md:text-[6rem]"
          )}
          onClick={() => {
            setShowNav(true);
            showPortfolio && setShowPortfolio(false);
          }}>
          <span className="timing-1">h</span>
          <span className="timing-2">a</span>
          <span className="timing-3">n</span>
          <span className="timing-4">n</span>
          <span className="timing-5">a</span>
          <span className="timing-6 mr-6">h</span>
          <span className="timing-7">j</span>
          <span className="timing-8">o</span>
          <span className="timing-9">y</span>
          <span className="timing-10">c</span>
          <span className="timing-11">e</span>
        </button>
        {showAboutMe && (
          <DetailView hidden={!showAboutMe} toggleSelf={handleSetShowAboutMe}>
            <p className="text-justify font-sans md:m-[.9rem] md:text-2xl">
              is a software developer and poet who bleh blah blo blu blah ipsum
              dolor sit amet, con sectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </DetailView>
        )}
        {showForHire && (
          <DetailView hidden={!showForHire} toggleSelf={handleSetShowForHire}>
            <p className="text-justify font-sans md:m-[.9rem] md:text-2xl">
              is for hire! hire me lol bleh blah blo blu blah ipsum dolor sit
              amet, con sectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </DetailView>
        )}
        {showContact && (
          <DetailView hidden={!showContact} toggleSelf={handleSetShowContact}>
            <nav className="flex w-full flex-col text-3xl">
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
              "flex items-end md:col-start-1 md:row-start-3 md:mb-16"
            )}>
            <Nav
              toggleAbout={handleSetShowAboutMe}
              toggleContact={handleSetShowContact}
              togglePortfolio={handleTogglePortfolio}
            />
          </div>
          <button
            onClick={handleSetShowForHire}
            className="hover mr-20 mb-16 w-fit self-end justify-self-end rounded-full border border-lilac-dark bg-lilac px-4 py-2 text-right font-sans text-3xl text-white md:col-start-3 md:row-start-3">
            FOR HIRE
          </button>
        </>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

/**
 * 
 *             <button
              onClick={() => makeBig(false)}
              className={classNames(
                isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1",
                "grid text-left text-2xl"
              )}>
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </button>
 * 
 *             <div className="grid text-2xl">
              <div className="h-32 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-[30rem] w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-48 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-52 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-[30rem] w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
            <div className="grid text-2xl">
              <div className="h-96 w-full bg-slate-100">{}</div>
              <div className="mt-4 self-end">
                Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque
                arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus
                bibendum, varius imperdiet ipsum.
              </div>
            </div>
 */
