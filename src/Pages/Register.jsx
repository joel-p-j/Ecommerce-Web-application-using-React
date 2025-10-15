import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { RegisterUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = RegisterUser(email, password);
    if (success) {
      alert("Registration Successful");
      navigate('/login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-700 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-purple-800">Create Account</h1>
        <p className="text-gray-500 text-center mb-6">Sign up to get started</p>

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
          Register
        </button>

        <p className="text-sm text-gray-500 text-center mt-2">
          Already have an account?{' '}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
