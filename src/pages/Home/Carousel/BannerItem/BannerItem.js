import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { id, image, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-6 lg:top-35 md:top-20 top-10">
        <small className="text-white font-bold">GO FOR HELP</small>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-6 top-1/3 my-2">
        <h1 className="lg:text-7xl text-white md:text-5xl text-3xl font-bold sm:mb-5">
          They Are Wait <br />
          For Some Food
        </h1>
      </div>

      <div className="absolute transform -translate-y-1/2 md:left-24 left-6 top-1/2 md:mt-0 my-12">
        <p className="text-white w-2/3">
          An organization whose purpose is to give money, food, or help to those
          who need it.
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle md:mr-5 mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
