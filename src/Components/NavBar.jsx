import { useState, useEffect } from "react";
// --- Import Icons ---
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Using solid icons as an example

// --- Accept theme and toggleTheme props ---
const Navbar = ({ refs, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationLinks = [
    { title: "About", ref: refs.aboutRef },
    { title: "Experience", ref: refs.experienceRef },
    { title: "Interests", ref: refs.interestsRef },
    { title: "Skills", ref: refs.skillsRef },
    { title: "Education", ref: refs.educationRef },
    { title: "Publications", ref: refs.publicationsRef },
  ];

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close mobile menu on navigation
    }
  };

  // --- Handler for mobile theme toggle (also closes menu) ---
  const handleMobileThemeToggle = () => {
    toggleTheme();
    setIsOpen(false);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the nav element itself
      const navElement = event.target.closest("nav");
      if (isMobile && isOpen && !navElement) {
         setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen]);


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 shadow-md"
          : "bg-white/90 dark:bg-gray-950/90"
      } backdrop-blur-md border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Adithya Ramachandran
          </button>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-1"> {/* Added items-center */}
            {navigationLinks.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.ref)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.title}
              </button>
            ))}
            {/* --- Desktop Theme Toggle Button --- */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 focus:ring-blue-500 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {/* --- End Desktop Theme Toggle Button --- */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
             {/* Hamburger/Close Icon SVG */}
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
             </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-gray-200 dark:border-gray-800`}> {/* Optional: add border */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationLinks.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.ref)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.title}
            </button>
          ))}
          {/* --- Mobile Theme Toggle Button --- */}
          <button
            onClick={handleMobileThemeToggle} // Use the handler that also closes the menu
            className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span>Switch Theme</span>
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          {/* --- End Mobile Theme Toggle Button --- */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;