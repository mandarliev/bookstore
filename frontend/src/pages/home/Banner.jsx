import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">Releases</h1>
        <p className="mb-10">
          It's time to update your reading list with some of the greatest
          releases in the stoic philosophy and the Austrian school of economics.
          From Zenon to Marcus Aurelius and from Carl Menger to Murray Rothbard
          these releases offer captivating philosophy and economics teachings.{" "}
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
