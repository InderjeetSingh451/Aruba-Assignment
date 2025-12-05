import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isSign,setIsSign] = useState("Sign-up");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSign("Signing-up.....");
    try {
      const res = await axios.post(
        "https://aruba-assignment-backend.onrender.com/api/user/sign",
        {
          name,
          email,
          password,
        }
      );

      if (!res.data.success){
        setIsSign("Sign-up");
        return setError(res.data.message);
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsSign("Signing-up.....");
      navigate("/");
    } catch (err) {
      setIsSign("Signing-up.....");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900/80 border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Create Account</h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign up with your details below.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              placeholder="Create a password"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white py-2.5 rounded-lg transition shadow-md shadow-indigo-500/30"
          >
            {isSign}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link to={"/login"} className="text-indigo-400 hover:text-indigo-300">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;






