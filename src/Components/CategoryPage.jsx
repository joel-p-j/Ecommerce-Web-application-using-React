import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // ✅ CASE-INSENSITIVE FILTER (FIX)
    const filteredProducts = storedProducts.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase() === categoryName.toLowerCase()
    );

    setProducts(filteredProducts);
  }, [categoryName]);

  const handleCheckout = (product) => {
    localStorage.setItem("checkoutItems", JSON.stringify([product]));
    navigate("/checkout");
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      toast.error(`${product.name} is already in your cart!`);
    } else {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      toast.success(`${product.name} added to cart`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 capitalize text-gray-800">
        {categoryName} Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products found in this category.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden group">
                <img
                  src={`/${product.imageUrl}`}
                  alt={product.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {product.name}
                </h2>

                <p className="text-gray-500 mb-3 text-sm">
                  Category:{" "}
                  <span className="capitalize">{product.category}</span>
                </p>

                <p className="text-xl font-bold text-[#6C4FE0]">
                  ${product.price}
                </p>

                <div className="flex justify-center gap-3 w-full">
                  <button
                    onClick={() => handleCheckout(product)}
                    className="mt-4 bg-[#6C4FE0] text-white px-4 py-2 rounded-lg hover:bg-[#5b3fd1] transition-colors duration-300 flex-1"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white border border-gray-300 hover:bg-gray-100 p-3 mt-4 rounded-lg text-[#6C4FE0] text-2xl transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
