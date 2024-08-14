"use client";

import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";

import "flickity/css/flickity.css";
import "@/libs/flickity/custom.css";
import Button from "../button/Button";
import IconArrow from "../icons/IconArrow";

export default function FlickityCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [flickityInstance, setFlickityInstance] = useState<Flickity | null>(
    null,
  );
  const [showControls, setShowControls] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const childrenCount = React.Children.count(children);
    setShowControls(childrenCount >= 3);
    setTotalSlides(childrenCount);

    if (childrenCount >= 3 && carouselRef.current) {
      // Check if window is defined (running in client-side)
      if (typeof window !== "undefined") {
        const flickity = new Flickity(carouselRef.current, {
          cellAlign: "left",
          contain: true,
          // wrapAround: true,
          prevNextButtons: false,
          draggable: true,
          pageDots: false,
          imagesLoaded: true,
          // groupCells: 2,
        });

        flickity.on("change", (index) => {
          setCurrentSlide(index + 1);
        });

        setFlickityInstance(flickity);

        return () => {
          flickity.destroy();
        };
      }
    }
  }, [children]);

  const goToNextSlide = () => {
    if (flickityInstance) {
      flickityInstance.next();
    }
  };

  const goToPrevSlide = () => {
    if (flickityInstance) {
      flickityInstance.previous();
    }
  };

  const childrenCount = React.Children.count(children);
  if (childrenCount < 3) {
    return <div className="flex items-center justify-center">{children}</div>;
  }
  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      {showControls && (
        <div className="mt-[25px] flex items-center justify-center sm:mt-[50px]">
          <Button
            onClick={goToPrevSlide}
            className="carousel-prev flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bltext !p-0 hover:bg-blue hover:bg-opacity-30 sm:h-[50px] sm:w-[50px]"
          >
            <IconArrow />
          </Button>
          <span className="mx-3 text-small sm:mx-8">
            {currentSlide} of {totalSlides}
          </span>
          <Button
            onClick={goToNextSlide}
            className="carousel-next flex h-[30px] w-[30px] rotate-180 items-center justify-center rounded-full border border-bltext !p-0 hover:bg-blue hover:bg-opacity-30 sm:h-[50px] sm:w-[50px]"
          >
            <IconArrow />
          </Button>
        </div>
      )}
    </div>
  );
}
