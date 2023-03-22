import React from "react";
import carousel1 from "../../../images/carousel/carousel1.jpg";
import carousel2 from "../../../images/carousel/carousel2.jpg";
import carousel3 from "../../../images/carousel/carousel3.jpg";
import carousel4 from "../../../images/carousel/carousel4.jpg";
import BannerItem from "./BannerItem/BannerItem";

const Carousel = () => {
    const slides = [
        {
          id: 1,
          image: carousel1,
          prev: 4,
          next: 2,
        },
        {
          id: 2,
          image: carousel2,
          prev: 1,
          next: 3,
        },
        {
          id: 3,
          image: carousel3,
          prev: 2,
          next: 4,
        },
        {
          id: 4,
          image: carousel4,
          prev: 3,
          next: 1,
        }
      ];
  return (
    <div className="carousel w-full">
      {
          slides.map(slide => <BannerItem
            key = {slide.id} slide = {slide}
          ></BannerItem>)
      }
    </div>
  );
};

export default Carousel;
