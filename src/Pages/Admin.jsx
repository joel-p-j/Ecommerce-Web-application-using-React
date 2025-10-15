import React, { useState, useContext } from 'react'
import Dashboard from '../Components/Dashboard'
import AdminUserManage from '../Components/AdminUserManage'
import AdminProduct from '../Components/AdminProduct'
import AdminOrderManage from '../Components/AdminOrderManage'
import { AuthContext } from '../Context/AuthContext'

const Admin = () => {
  const [activetab, setActiveTab] = useState('dashboard')
  const { currentUser, LogoutUser } = useContext(AuthContext)

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      {/* Header */}
      <header className='relative bg-purple-600 text-white px-4 py-3 shadow-md flex items-center justify-center'>
        {/* Title */}
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>
          WELCOME BACK ADMIN !
        </h1>

        {/* Logout button (Right side) */}
        <button
          onClick={LogoutUser}
          className='absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white text-purple-600 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow hover:bg-gray-200 transition-all text-sm sm:text-base'
        >
          Log Out
        </button>
      </header>

      {/* Main Content */}
      <div className='flex flex-1 flex-col lg:flex-row'>
        {/* Sidebar */}
        <nav className='sidebar w-full lg:w-64 bg-white shadow-md p-4 sm:p-6 flex flex-row lg:flex-col gap-3 sm:gap-6 overflow-x-auto lg:overflow-visible'>
          <div
            onClick={() => setActiveTab('dashboard')}
            className={`p-2 rounded font-semibold text-base sm:text-lg cursor-pointer whitespace-nowrap ${
              activetab === 'dashboard'
                ? 'bg-purple-600 text-white shadow'
                : 'hover:bg-purple-100 text-gray-800'
            }`}
          >
            Dashboard
          </div>
          <div
            onClick={() => setActiveTab('user')}
            className={`p-2 rounded font-semibold text-base sm:text-lg cursor-pointer whitespace-nowrap ${
              activetab === 'user'
                ? 'bg-purple-600 text-white shadow'
                : 'hover:bg-purple-100 text-gray-800'
            }`}
          >
            Users
          </div>
          <div
            onClick={() => setActiveTab('product')}
            className={`p-2 rounded font-semibold text-base sm:text-lg cursor-pointer whitespace-nowrap ${
              activetab === 'product'
                ? 'bg-purple-600 text-white shadow'
                : 'hover:bg-purple-100 text-gray-800'
            }`}
          >
            Products
          </div>
          <div
            onClick={() => setActiveTab('orders')}
            className={`p-2 rounded font-semibold text-base sm:text-lg cursor-pointer whitespace-nowrap ${
              activetab === 'orders'
                ? 'bg-purple-600 text-white shadow'
                : 'hover:bg-purple-100 text-gray-800'
            }`}
          >
            Orders
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className='flex-1 p-4 sm:p-6 overflow-auto'>
          {activetab === 'dashboard' && <Dashboard />}
          {activetab === 'user' && <AdminUserManage />}
          {activetab === 'product' && <AdminProduct />}
          {activetab === 'orders' && <AdminOrderManage />}
        </main>
      </div>
    </div>
  )
}

export default Admin
