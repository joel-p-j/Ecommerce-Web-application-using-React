import React, { useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";
import Interval from "./Interval";
import Interval2 from "./Interval2";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  const handleCheckout = (product) => {
    localStorage.setItem("checkoutItems", JSON.stringify([product]));
    navigate("/checkout");
  };

  /* =========================
     PRODUCT DATA (WITH CATEGORY)
  ========================= */
  const products = [
  // ================= KEYBOARDS =================
  {
    id: 1,
    name: "Swarm All White Wireless Gaming Keyboard",
    price: 499,
    imageUrl: "assets/images/Product1.png",
    category: "keyboard",
  },
  {
    id: 2,
    name: "Swarm Sasuke Edition",
    price: 799,
    imageUrl: "assets/images/Product2.png",
    category: "keyboard",
  },
  {
    id: 3,
    name: "Hive75 Black - Purple Wired Gaming Keyboard",
    price: 799,
    imageUrl: "assets/images/Product3.png",
    category: "keyboard",
  },
  {
    id: 4,
    name: "Hive98 Full-Size White - Purple Wired Gaming Keyboard",
    price: 299,
    imageUrl: "assets/images/Product4.png",
    category: "keyboard",
  },
  {
    id: 5,
    name: "Hive65 Black Purple Mechanical Gaming Keyboard",
    price: 399,
    imageUrl: "assets/images/Product5.png",
    category: "keyboard",
  },

  // ================= MOUSE =================
  {
    id: 6,
    name: "Anzu Black 52g Wireless Gaming Mouse",
    price: 499,
    imageUrl: "assets/images/Mouse1.png",
    category: "mouse",
  },
  {
    id: 7,
    name: "Ikarus White 55g Wireless Gaming Mouse",
    price: 799,
    imageUrl: "assets/images/Mouse2.png",
    category: "mouse",
  },
  {
    id: 8,
    name: "Hawk Naruto Black Orange",
    price: 799,
    imageUrl: "assets/images/Mouse3.png",
    category: "mouse",
  },
  {
    id: 9,
    name: "Hawk Gaming Mouse - Black",
    price: 299,
    imageUrl: "assets/images/Mouse4.png",
    category: "mouse",
  },
  {
    id: 10,
    name: "Harpy Light Weight RGB Gaming Mouse",
    price: 399,
    imageUrl: "assets/images/Mouse5.png",
    category: "mouse",
  },

  // ================= AUDIO =================
  {
    id: 11,
    name: "Thunder Bass Wireless Headset",
    price: 1299,
    imageUrl: "assets/images/Audio1.png",
    category: "audio",
  },
  {
    id: 12,
    name: "Pulse Pro RGB Gaming Headphones",
    price: 1599,
    imageUrl: "assets/images/Audio2.png",
    category: "audio",
  },
  {
    id: 13,
    name: "EchoX Surround Sound Headset",
    price: 1999,
    imageUrl: "assets/images/Audio3.png",
    category: "audio",
  },
  {
    id: 14,
    name: "WaveCore Studio Gaming Headphones",
    price: 1799,
    imageUrl: "assets/images/Audio4.png",
    category: "audio",
  },

  // ================= CHAIR =================
  {
    id: 15,
    name: "Titan Pro Ergonomic Gaming Chair",
    price: 8999,
    imageUrl: "assets/images/chair1.png",
    category: "chair",
  },
  {
    id: 16,
    name: "Elite Racer Premium Gaming Chair",
    price: 10999,
    imageUrl: "assets/images/chair2.png",
    category: "chair",
  },
  {
    id: 17,
    name: "ComfortX Adjustable Gaming Chair",
    price: 7999,
    imageUrl: "assets/images/chair3.png",
    category: "chair",
  },
];


  /* =========================
     SAVE PRODUCTS ONCE
  ========================= */
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("products")) || [];

  const mergedProducts = [...stored];

  products.forEach((newProduct) => {
    const exists = mergedProducts.some(
      (p) => p.id === newProduct.id
    );
    if (!exists) {
      mergedProducts.push(newProduct);
    }
  });

  localStorage.setItem("products", JSON.stringify(mergedProducts));
}, []);



  /* =========================
     SLIDER ARROWS
  ========================= */
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[-4.5rem] right-60 text-4xl cursor-pointer z-10"
      onClick={onClick}
    >
      <AiOutlineLeft />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[-4.5rem] right-50 text-4xl cursor-pointer z-10"
      onClick={onClick}
    >
      <AiOutlineRight />
    </div>
  );

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const keyboards = products.filter(p => p.category === "keyboard");
  const mouse = products.filter(p => p.category === "mouse");

  return (
    <div className="relative w-full overflow-x-clip">
      <Interval />

      {/* KEYBOARDS */}
      <div className="p-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-8">
          Gaming Keyboards
        </h1>

        <Slider {...settings}>
          {keyboards.map((product) => (
            <div key={product.id} className="px-5">
              <div className="bg-[#FAFAFA] rounded-2xl h-[450px] flex flex-col">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-2/3 object-cover"
                />
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h1 className="text-lg font-medium">{product.name}</h1>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">${product.price}</span>
                    <button
                      onClick={() => handleCheckout(product)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* MOUSE */}
      <div className="p-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-8">
          Gaming Mouse
        </h1>

        <Slider {...settings}>
          {mouse.map((product) => (
            <div key={product.id} className="px-5">
              <div className="bg-[#FAFAFA] rounded-2xl h-[450px] flex flex-col">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-2/3 object-cover"
                />
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h1 className="text-lg font-medium">{product.name}</h1>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">${product.price}</span>
                    <button
                      onClick={() => handleCheckout(product)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Interval2 />
    </div>
  );
};

export default ProductCard;
