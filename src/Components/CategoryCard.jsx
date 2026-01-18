import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const Categories = [
    { name: "keyboard", image: "assets/images/Category1.png" },
    { name: "mouse", image: "assets/images/Category2.png" },
    { name: "audio", image: "assets/images/Category3.png" },
    { name: "chair", image: "assets/images/Category4.png" },
    { name: "lighting", image: "assets/images/Category5.png" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 w-full">
      
      <h1 className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        font-semibold
        text-center
        mb-10
      ">
        Go Beyond Limits
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {Categories.map((cat) => (
          <Link key={cat.name} to={`/category/${cat.name}`}>
            <div className="bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg transition">
              
              <img
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
                alt={cat.name}
                src={cat.image}
              />

              <div className="py-3 px-4 sm:px-6 flex justify-between items-center">
                <h1 className="text-sm sm:text-base md:text-lg font-medium capitalize">
                  {cat.name}
                </h1>
                <AiOutlineRight className="text-lg sm:text-xl" />
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
