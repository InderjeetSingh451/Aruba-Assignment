import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="w-full bg-gray-900">
      <div className="max-w-7xl mx-auto h-12 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden text-white p-2 rounded hover:bg-gray-800 transition"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              to={"/"}
              className="px-3 py-1 font-medium rounded text-white hover:bg-gray-800 transition"
            >
              Home
            </Link>

            <div className="px-3 py-1 font-medium rounded text-white hover:bg-gray-800 transition">
              Option2
            </div>
            <div className="px-3 py-1 font-medium rounded text-white hover:bg-gray-800 transition">
              Option3
            </div>
          </nav>
        </div>

        {/*Search bar*/}
        <div className="flex items-center w-full md:w-auto ml-4 md:ml-0">
          <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm w-full md:min-w-[200px]">
            <HiSearch size={18} className="text-gray-500" />

            <input
              placeholder="Search..."
              className="ml-2 w-full text-sm bg-transparent placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4 ml-4">
          {user ? (
            <>
              <span className="text-white text-sm">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm bg-red-600 rounded text-white hover:bg-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-2 flex flex-col gap-2">
            <Link
              to={"/"}
              className="px-3 py-2 text-white rounded hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link className="px-3 py-2 text-white rounded hover:bg-gray-800 transition">
              Option2
            </Link>
            <Link className="px-3 py-2 text-white rounded hover:bg-gray-800 transition">
              Option3
            </Link>

            {/* Mobile Login/Logout */}
            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-red-600 rounded text-white hover:bg-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <Link></Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
