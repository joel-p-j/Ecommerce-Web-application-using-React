import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  // Dummy data for Line Chart (weekly users)
  const lineData = [
    { day: "Mon", users: 30 },
    { day: "Tue", users: 45 },
    { day: "Wed", users: 60 },
    { day: "Thu", users: 50 },
    { day: "Fri", users: 70 },
    { day: "Sat", users: 90 },
    { day: "Sun", users: 80 },
  ];

  // Dummy data for Pie Chart (role distribution)
  const pieData = [
    { name: "Admins", value: 2 },
    { name: "Customers", value: 20 },
  ];
  const COLORS = ["#6366F1", "#34D399"];

  // Dummy stats cards
  const stats = [
    { title: "Total Users", value: 22, color: "bg-indigo-500" },
    { title: "Active Users Today", value: 15, color: "bg-green-500" },
    { title: "Total Visits", value: 230, color: "bg-yellow-500" },
    { title: "New Signups", value: 5, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md text-white ${stat.color}`}
          >
            <h3 className="text-gray-100 font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Growth (This Week)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={lineData}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#6366F1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Role Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
