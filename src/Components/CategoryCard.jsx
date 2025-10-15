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
    <div className="p-10 w-full">
      <h1 className="py-10 px-20 text-5xl font-semibold">Go Beyond Limits</h1>
      <div className="Card-container grid grid-cols-2 lg:grid-cols-5 gap-5">
        {Categories.map((cat) => (
          <Link key={cat.name} to={`/category/${cat.name}`}>
            <div className="card bg-[#FAFAFA] lg:h-90 rounded-2xl">
              <img className="rounded-t-2xl " alt="Keyboards" src={cat.image} />
              <div className="card-Text py-5 px-10 flex justify-between items-center">
                <h1 className="text-xl font-medium">{cat.name}</h1>
                <h1 className="text-xl">
                  <AiOutlineRight />
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
