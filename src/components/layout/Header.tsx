import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "الرئيسية", href: "/#hero" },
  { name: "من نحن", href: "/#about" },
  { name: "خدماتنا", href: "/#services" },
  { name: "أعمالنا", href: "/#portfolio" },
  { name: "لماذا نحن", href: "/#why-us" },
  { name: "تواصل معنا", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="A.Y Smart Solutions"
            className="h-12 w-auto rounded-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant={isScrolled ? "teal" : "heroOutline"}
            size="default"
            asChild
          >
            <a href="#contact">احصل على استشارة</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-elevated border-t border-border"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="teal" size="lg" className="mt-2" asChild>
              <a href="#contact">احصل على استشارة</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
