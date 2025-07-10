import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import Logo from "./Logo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className='fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 shadow-xl font-mono'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Logo />

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  activeLink === link.href.substring(1)
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`}
              >
                {link.label}
                {activeLink === link.href.substring(1) && (
                  <span className='absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full'></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(true)}
              className='text-3xl md:hidden cursor-pointer text-gray-300 hover:text-teal-400 transition-colors'
            >
              <MdMenu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
