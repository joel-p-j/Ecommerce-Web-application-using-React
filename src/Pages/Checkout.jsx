import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate=useNavigate()
  let checkoutItem = JSON.parse(localStorage.getItem("checkoutItems")) || [];
   const handleOrder = () => {
    // toast.success("Order placed Successfully");
    // setCheckoutItem([]);
    localStorage.setItem("cartItems", JSON.stringify(checkoutItem));
    setTimeout(() => {
      navigate("/payment");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
          🛒 Order Summary
        </h1>

        <div className="flex flex-col gap-6">
          {checkoutItem.length > 0 ? (
            checkoutItem.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-5 last:border-b-0"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>
                  <p className="mt-2 text-green-700 font-semibold text-lg">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">
              No items in checkout.
            </p>
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl p-8 h-fit">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
          💰 Price Details
        </h2>

        {checkoutItem.length > 0 ? (
          <>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between text-lg">
                <p>Price ({checkoutItem.length} item)</p>
                <p>
                  $
                  {checkoutItem
                    .reduce((acc, item) => acc + Number(item.price), 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Delivery Charges</p>
                <p>$2.00</p>
              </div>

              <div className="border-t border-gray-300 pt-4 font-bold text-lg flex justify-between">
                <p>Total Amount</p>
                <p>
                  $
                  {(
                    checkoutItem.reduce(
                      (acc, item) => acc + Number(item.price),
                      0
                    ) + 2
                  ).toFixed(2)}
                </p>
              </div>
            </div>

            <button onClick={handleOrder}
             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 mt-6 rounded-lg transition duration-300">
              Place Order
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No price details available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
