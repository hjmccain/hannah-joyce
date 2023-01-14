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

  const handleSetShowAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowContact(false);
    setShowPortfolio(false);
  };

  const handleSetShowContact = () => {
    setShowContact(!showContact);
    setShowAboutMe(false);
    setShowPortfolio(false);
  };

  const handleTogglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
    setShowAboutMe(false);
    setShowContact(false);
  };

  // get screen size and set `showNav` to true below 768px

  // if user hits esc while in portfolio mode, close portfolio

  console.log({ showNav });

  return (
    <main className="relative grid min-h-screen grid-rows-[repeat(3,_fit-content(100px))] gap-4 md:grid-rows-3 xl:grid-cols-3">
      <div
        className={classNames(
          showAboutMe || showContact ? "md:mt-[-100px]" : "md:mt-0",
          showPortfolio ? "md:mt-[-420px]" : "md:mt-0",
          "flex h-fit w-fit flex-col overflow-hidden transition-all duration-500 md:col-start-1 md:row-span-2 md:row-start-2 md:mx-auto md:items-center md:rounded-[100px] md:p-10 xl:col-start-2"
        )}>
        <button
          className={classNames(
            showNav ? "cursor-default" : "",
            "m-12 my-4 h-10 text-left md:m-0 md:mb-4 md:h-auto md:text-center md:text-7xl"
          )}
          onClick={() => setShowNav(true)}>
          hannah joyce
        </button>
        {showAboutMe && (
          <DetailView hidden={!showAboutMe} toggleSelf={handleSetShowAboutMe}>
            <p className="text-justify md:m-[.9rem] md:text-2xl">
              is a software developer and poet who bleh blah blo blu blah ipsum
              dolor sit amet, con sectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </DetailView>
        )}
        {showContact && (
          <DetailView hidden={!showContact} toggleSelf={handleSetShowContact}>
            <nav className="flex w-full flex-col">
              <li className="list-none text-center text-2xl">
                <a href="mailto:hannahjmccain@gmail.com">email</a>
              </li>
              <li className="list-none text-center text-2xl">
                <a
                  href="https://www.instagram.com/imaginary_hannah/"
                  target="_blank"
                  rel="noopener noreferrer">
                  instagram
                </a>
              </li>
              <li className="list-none text-center text-2xl">
                <a
                  href="https://www.are.na/hannah-mccain"
                  target="_blank"
                  rel="noopener noreferrer">
                  are.na
                </a>
              </li>
              <li className="list-none text-center text-2xl">
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
