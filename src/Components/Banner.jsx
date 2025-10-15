
import React from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


const Banner = () => {

      const NextArrow=({onClick})=>{
    return <div className="absolute top-1/2 translate-y-1/2 z-10 right-2 text-white text-4xl cursor-pointer" onClick={onClick}><AiOutlineRight/></div>
  }

    const PrevArrow=({onClick})=>{
    return <div className="absolute z-10 left-2 translate-y-1/2 text-white top-1/2 text-4xl" onClick={onClick}><AiOutlineLeft/></div>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    nextArrow:<NextArrow/>,
    prevArrow: <PrevArrow/>
  };


  

  return (
    <div className="p-10 relative h-100 w-full">
      <Slider {...settings}>
        <img src="assets/images/Banner1.png" alt="Banner 1" className="rounded-3xl w-full" />
        <img src="assets/images/Banner2.png" alt="Banner 2" className="rounded-3xl w-full" />
        <img src="assets/images/Banner3.png" alt="Banner 3" className="rounded-3xl w-full" />
      </Slider>
    </div>
    
  );
};

export default Banner;



