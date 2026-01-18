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
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(cart));
      toast.success(`${product.name} added to cart`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-10 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 capitalize">
        {categoryName} Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`/${product.imageUrl}`}
                alt={product.name}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="font-semibold truncate">{product.name}</h2>

                <p className="text-sm text-gray-500 mt-1 capitalize">
                  {product.category}
                </p>

                <p className="text-xl font-bold text-indigo-600 mt-2">
                  ${product.price}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => handleCheckout(product)}
                    className="bg-indigo-600 text-white py-2 rounded-lg w-full"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="border rounded-lg py-2 flex items-center justify-center text-indigo-600 text-xl w-full sm:w-14"
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
