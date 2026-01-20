import { useState } from "react";
import { Link } from "@tanstack/react-router";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-background-border shadow-md-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-ghost text-accent flex items-center justify-center font-bold text-lg">
              CS
            </div>
            <span className="text-xl font-semibold text-foreground">
              Constellation Sonoma
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-foreground-secondary">
            <Link
              to="/"
              className="[&.active]:text-accent [&.active]:font-semibold hover:text-accent transition-colors duration-200">
              Home
            </Link>
            <Link
              to="/services"
              className="[&.active]:text-accent [&.active]:font-semibold hover:text-accent transition-colors duration-200">
              Services
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col gap-2 text-foreground-secondary border-t border-background-border pt-4">
            <Link
              to="/"
              className="[&.active]:text-accent [&.active]:font-semibold hover:text-accent transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/services"
              className="[&.active]:text-accent [&.active]:font-semibold hover:text-accent transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
