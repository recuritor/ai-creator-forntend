import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isActive = (path) =>
    location.pathname === path
      ? "text-white"
      : "text-gray-400 hover:text-white";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0D14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide drop-shadow-[0_0_20px_rgba(79,172,254,0.4)]"
        >
          Greywave
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F1623] border border-gray-700">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center font-semibold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span className="text-gray-300 text-sm">
                  {user?.name || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-400 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className={isActive("/login")}>
              Login
            </Link>
          )}

          <Link
            to="/builder"
            className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 glow font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0D14]/95 border-t border-white/10 px-6 py-4 space-y-4">
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
            Pricing
          </Link>

          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span className="text-gray-300">
                  {user?.name || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-left text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300"
            >
              Login
            </Link>
          )}

          <Link
            to="/builder"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 glow font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}