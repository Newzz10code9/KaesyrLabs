import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.webp"
              alt="Kaesyr Labs Logo"
              className="rounded-full w-8 h-8 object-cover"
            />
            <span className="font-bold text-xl text-purple-200">Kaesyr Labs</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};