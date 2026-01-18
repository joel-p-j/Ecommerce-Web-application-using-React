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

  // ✅ Cloudinary optimized banner URLs
  const banners = [
    "https://res.cloudinary.com/dnt75yyou/image/upload/f_auto,q_auto/Banner1_cxxc4s",
    "https://res.cloudinary.com/dnt75yyou/image/upload/f_auto,q_auto/Banner2_xdiiwd",
    "https://res.cloudinary.com/dnt75yyou/image/upload/f_auto,q_auto/Banner3_gp0m11",
    "https://res.cloudinary.com/dnt75yyou/image/upload/f_auto,q_auto/Banner4_z7yw9w",
  ];

  return (
    <div className="relative w-full px-3 sm:px-6 md:px-10 py-4 sm:py-6">
      <Slider {...settings}>
        {banners.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              loading="lazy"
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
