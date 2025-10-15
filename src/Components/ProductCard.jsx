import React from "react";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";
import Interval from "./Interval";
import Interval2 from "./Interval2";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const navigate=useNavigate()

    const PrevArrow=({onClick})=>{
        return <div className="text-black absolute top-[-4.5rem] translate-y-1 z-10 right-60 text-4xl cursor-pointer" onClick={onClick}><AiOutlineLeft /></div>
    }
        const NextArrow=({onClick})=>{
        return <div className="text-black absolute top-[-4.5rem] text-4xl cursor-pointer translate-y-1 z-10 right-50" onClick={onClick}><AiOutlineRight/></div>
    }

    const handleCheckout=(product)=>{
    localStorage.setItem('checkoutItems',JSON.stringify([product]))
    navigate('/checkout')

  }
   const Keyboards = [
  {
    imageUrl: "assets/images/Product1.png",
    name: "Swarm All White Wireless Gaming Keyboard",
    price: "499",
    id:Date.now() +1
  },
  {
    imageUrl: "assets/images/Product2.png",
    name: "Swarm Sasuke Edition",
    price: "799",
    id:Date.now()+2
  },
  {
    imageUrl: "assets/images/Product3.png",
    name: "Hive75 Black - Purple Wired Gaming Keyboard",
    price: "799",
    id:Date.now()+3
  },
  {
    imageUrl: "assets/images/Product4.png",
    name: "Hive98 Full-Size White - Purple Wired Gaming Keyboard",
    price: "299",
    id:Date.now()+4
  },
  {
    imageUrl: "assets/images/Product5.png",
    name: "Hive65 Black Purple Mechanical Gaming Keyboard",
    price: "399",
    id:Date.now()+5

  }
];

const Mouse = [
  {
    id: Date.now() + 6,
    imageUrl: "assets/images/Mouse1.png",
    name: "Anzu Black 52g Wireless Gaming Mouse",
    price: "499"
  },
  {
    id: Date.now() + 7,
    imageUrl: "assets/images/Mouse2.png",
    name: "Ikarus White 55g Wireless Gaming Mouse",
    price: "799"
  },
  {
    id: Date.now() + 8,
    imageUrl: "assets/images/Mouse3.png",
    name: "Hawk Naruto Black Orange",
    price: "799"
  },
  {
    id: Date.now() + 9,
    imageUrl: "assets/images/Mouse4.png",
    name: "Hawk Gaming Mouse - Black",
    price: "299"
  },
  {
    id: Date.now() + 10,
    imageUrl: "assets/images/Mouse5.png",
    name: "Harpy Light Weight RGB Gaming Mouse",
    price: "399"
  }
];




  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,

  };
  return (
    <div className="relative w-full overflow-x-clip">
                <Interval/>

      <div className="p-10">
<h1 className="py-5 px-5 md:py-10 md:px-10 text-3xl md:text-5xl font-semibold">
  Gaming Keyboards
</h1>

       <Slider {...settings} className="Card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            
            {
              Keyboards.map((keyboard)=>(
            <div key={keyboard.id} className="card px-5 ">
              <div className="bg-[#FAFAFA] rounded-2xl flex flex-col overflow-hidden h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px]">
                <img
                  className="rounded-t-2xl w-full h-2/3 object-cover"
                  src={keyboard.imageUrl}
                  alt="Keyboards"
                />
                <div className="card-Text flex flex-col justify-between gap-2 py-3 px-5 flex-1">
  <h1 className="text-lg md:text-xl font-medium">{keyboard.name}</h1>
  <div className="flex justify-between items-center mt-auto">
    <span className="text-lg md:text-xl font-semibold">${keyboard.price}</span>
    <button onClick={()=>handleCheckout(keyboard)} className="bg-indigo-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-indigo-700 transition">
      Buy Now
    </button>
  </div>
</div>

            </div>
          </div>
              ))
            }
        </Slider>
      </div>



      <div className="p-10">
  <h1 className="py-5 px-5 md:py-10 md:px-10 text-3xl md:text-5xl font-semibold">
    Gaming Mouse
  </h1>

  <Slider {...settings} className="Card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {Mouse.map((mouse) => (
      <div key={mouse.id} className="card px-5">
        <div className="bg-[#FAFAFA] rounded-2xl flex flex-col overflow-hidden h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px]">
          <img
            className="rounded-t-2xl w-full h-2/3 object-cover"
            src={mouse.imageUrl}
            alt={mouse.name}
          />
          <div className="card-Text flex flex-col justify-between gap-2 py-3 px-5 flex-1">
            <h1 className="text-lg md:text-xl font-medium">{mouse.name}</h1>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-lg md:text-xl font-semibold">${mouse.price}</span>
              <button onClick={()=>handleCheckout(mouse)} className="bg-indigo-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-indigo-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>


          <Interval2/>


    </div>
  );
};

export default ProductCard;
