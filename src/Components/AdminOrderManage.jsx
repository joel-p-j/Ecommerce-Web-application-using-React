import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const AdminOrderManage = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
        Orders
      </h1>

      <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Address</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Payment Mode</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-8 text-lg font-medium"
                >
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{order.customerName}</td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                      {order.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between bg-gray-50 p-2 rounded-md border border-gray-200"
                        >
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-gray-600">
                            {item.quantity} × ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">{order.address}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    {order.paymentMethod.toUpperCase()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="block md:hidden space-y-4">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg font-medium py-6">
            No orders found
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow p-4 border border-gray-200"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Order ID:</span>
                <span className="text-sm text-gray-800">{order.id}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Name:</span>
                <span className="text-sm text-gray-800">{order.customerName}</span>
              </div>

              <div className="mb-2">
                <span className="text-sm font-semibold text-gray-700">Items:</span>
                <div className="mt-1 flex flex-col gap-2">
                  {order.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between bg-gray-50 p-2 rounded border border-gray-200"
                    >
                      <span className="text-gray-800 font-medium">{item.name}</span>
                      <span className="text-gray-600 text-sm">
                        {item.quantity} × ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Address:</span> {order.address}
              </p>

              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Date:</span> {order.date}
              </p>

              <p className="text-sm text-gray-800 font-semibold">
                Payment: {order.paymentMethod.toUpperCase()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminOrderManage;
