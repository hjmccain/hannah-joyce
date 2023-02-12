import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// import { useState, useEffect } from "react";

const useHandleWindowResize = () => {
  const [[screenHeight, screenWidth], setScreenSize] = useState([
    window.screen.height,
    window.screen.width,
  ]);

  const handleSetScreenSize = () => {
    setScreenSize([window.screen.height, window.screen.width]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetScreenSize);
    return () => {
      window.removeEventListener("resize", handleSetScreenSize);
    };
  }, []);

  return [screenHeight, screenWidth] as const;
};

const GALLERY_WIDTH = 2000;

const Index: React.FC<PageProps> = () => {
  const GALLERY_ARRAY = [];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [screenCenter, setScreenCenter] = useState<number | null>(null);
  const [_, width] = useHandleWindowResize();

  useEffect(() => {
    setScreenCenter(width / 2);
  });

  useEffect(() => {
    const galleryItemWidth = GALLERY_WIDTH / GALLERY_ARRAY.length;
  }, [currentIndex]);

  return (
    <div className="overflow-hidden">
      {screenCenter && (
        <Layout>
          <div className="relative right-[300px] grid w-[2000px] grid-cols-3 grid-rows-1 text-3xl">
            <div id="1" className="m-12 text-black">
              <p className="">hello! i'm hannah</p>
              <StaticImage
                src="../assets/images/me.jpg"
                alt="a selfie of hannah indoors wearing winter clothes & sunglasses, flashing a peace sign"
              />
            </div>
            <div id="2" className="m-12 text-black">
              <p className="">i am a writer ...</p>
              <StaticImage
                src="../assets/images/poem.jpg"
                alt="a low-quality distorted photo of hannah's poem 'in the garden'"
              />
            </div>
            <div id="3" className="m-12 text-black">
              <p className="">hello! i'm hannah... again</p>
              <StaticImage
                src="../assets/images/me.jpg"
                alt="a selfie of hannah indoors wearing winter clothes & sunglasses, flashing a peace sign"
              />
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Index;

export const Head: HeadFC = () => <title>Home Page</title>;
