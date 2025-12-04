import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Brand or Logo */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide">Inderjeet</h2>
            <p className="text-gray-400 text-sm mt-1">
              Made For Technical Round.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <Link
              to={"/"}
              className="text-gray-300 text-sm hover:text-white transition"
            >
              Home
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Follow Us</h3>
            <div className="flex items-center gap-4">
              <FaFacebook
                className="text-gray-300 hover:text-white transition cursor-pointer"
                size={20}
              />
              <FaInstagram
                className="text-gray-300 hover:text-white transition cursor-pointer"
                size={20}
              />
              <FaTwitter
                className="text-gray-300 hover:text-white transition cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-sm">©2025 · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
