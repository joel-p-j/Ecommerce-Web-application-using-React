import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = LoginUser(email, password);
    if (success) {
      const users = JSON.parse(localStorage.getItem("currentUser"));
      if (users.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-700 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-purple-800">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">
          Login to your account to continue
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Login
        </button>

        <p className="text-sm text-gray-500 text-center mt-2">
          Don't have an account?{' '}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
