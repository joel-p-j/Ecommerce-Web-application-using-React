import React from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 z-10 text-white text-4xl cursor-pointer"
      onClick={onClick}
    >
      <AiOutlineRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 z-10 text-white text-4xl cursor-pointer"
      onClick={onClick}
    >
      <AiOutlineLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full px-3 sm:px-6 md:px-10 py-4 sm:py-6">
      <Slider {...settings}>
        {["Banner1", "Banner2", "Banner3"].map((banner, index) => (
          <div key={index}>
            <img
              src={`assets/images/${banner}.png`}
              alt={`Banner ${index + 1}`}
              className="
                w-full
                h-[180px]
                sm:h-[260px]
                md:h-[350px]
                lg:h-[420px]
                object-cover
                rounded-2xl
              "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
