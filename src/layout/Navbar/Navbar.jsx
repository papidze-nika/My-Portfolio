import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Storage } from "@/Storage/Storage";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          className="text-xl font-bold text-primary flex items-center"
          to="/"
        >
          <span className="text-glow text-foreground">NikaCore</span> Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {Storage.navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}

          {/* Desktop Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* ✅ Mobile Theme Toggle — TOP LEFT */}
          <div className="absolute top-5 left-5">
            <ThemeToggle />
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-col items-center space-y-8 text-xl">
            {Storage.navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
