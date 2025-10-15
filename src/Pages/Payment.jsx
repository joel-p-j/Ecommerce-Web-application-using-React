import React, { useEffect, useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CartContext } from "../Context/CartContext";

const CheckoutPage = () => {
  const { orders, setOrders } = useContext(CartContext);
  const navigate = useNavigate();
  const [checkoutItem, setCheckoutItem] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCheckoutItem(stored);
  }, []);

  const handleIncrease = (id) => {
    const updated = checkoutItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCheckoutItem(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleDecrease = (id) => {
    const updated = checkoutItem.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCheckoutItem(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const filtered = checkoutItem.filter((item) => item.id !== id);
    setCheckoutItem(filtered);
    localStorage.setItem("cartItems", JSON.stringify(filtered));
  };

  const handleOrder = () => {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!address.trim()) {
      toast.error("Please enter a delivery address before placing the order.");
      return;
    }

    const neworder = {
      id: Date.now(),
      customerName: name,
      items: checkoutItem,
      paymentMethod,
      address,
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [...(orders || []), neworder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    toast.success("Order placed Successfully");
    setCheckoutItem([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
        <div className="flex-1 bg-white shadow-lg rounded-3xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">
            🛒 Order Summary
          </h1>

          <div className="flex flex-col gap-6">
            {checkoutItem.length > 0 ? (
              checkoutItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-200 pb-5 last:border-b-0"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl border"
                  />
                  <div className="flex-1 w-full">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    <p className="mt-2 text-green-700 font-semibold text-lg">
                      ${item.price}
                    </p>

                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="bg-gray-200 px-3 rounded-lg hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="bg-gray-200 px-3 rounded-lg hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-10">No items in checkout.</p>
            )}
          </div>
        </div>

        <div className="w-full lg:flex-1 max-w-xl bg-white shadow-lg rounded-3xl p-10">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-5 mb-6">
            💳 Payment & Delivery
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Delivery Address</h3>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none shadow-sm transition duration-200"
              placeholder="Enter your delivery address..."
              rows={3}
            />
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Payment Method</h3>

            {["card", "upi", "cod"].map((method) => (
              <label
                key={method}
                className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-shadow duration-200 hover:shadow-md ${
                  paymentMethod === method ? "border-green-500 shadow-md" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 accent-green-600"
                  onClick={() => setPaymentMethod(method)}
                />
                <span className="text-gray-800 font-medium text-base">
                  {method === "card"
                    ? "Credit / Debit Card"
                    : method === "upi"
                    ? "UPI Payment"
                    : "Cash on Delivery"}
                </span>
              </label>
            ))}
          </div>

          {paymentMethod === "card" && (
            <div className="mb-6 space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
              />
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
                />
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-200"
              />
            </div>
          )}

          <button
            onClick={handleOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition duration-300 hover:shadow-lg"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
