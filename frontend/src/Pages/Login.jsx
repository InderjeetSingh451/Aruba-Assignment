import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://aruba-assignment-7v10.onrender.com/api/user/login",
        {
          email,
          password,
        }
      );

      if (!res.data.success) return setError(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900/80 border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-400">
            Login with your email and password to continue.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex items-center justify-between text-xs text-gray-400">
            <button type="button" className="hover:text-indigo-400 transition">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white py-2.5 rounded-lg transition shadow-md shadow-indigo-500/30"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/sign-in" className="text-indigo-400 hover:text-indigo-300">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
