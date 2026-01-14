import { useState } from "react";
import { Link } from "@tanstack/react-router";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {" "}
      <nav className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 text-white text-2xl font-bold px-3 py-2 rounded-lg">
              CS
            </div>
            <div className="flex flex-col text-sm leading-tight">
              <div>Constellation</div>
              <div>Sonoma</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/"
              className="[&.active]:font-bold hover:text-orange-600 transition">
              Home
            </Link>
            <Link
              to="/services"
              className="[&.active]:font-bold hover:text-orange-600 transition">
              Services
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col gap-2 pb-2">
            <Link
              to="/"
              className="[&.active]:font-bold hover:text-orange-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/services"
              className="[&.active]:font-bold hover:text-orange-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
