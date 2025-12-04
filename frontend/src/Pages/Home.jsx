import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // redirect if not logged in
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const userName = user?.name || "Guest";

  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Welcome <span className="text-indigo-600">{userName}</span>
          </h1>

          <p className="mt-3 text-white text-sm md:text-base max-w-md mx-auto">
            We're glad to have you here. Explore and enjoy your experience!
          </p>
        </div>
      </main>

      <hr />
      <Footer />
    </>
  );
};

export default Home;
