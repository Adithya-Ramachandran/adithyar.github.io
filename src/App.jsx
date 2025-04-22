import { useRef, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Publications from "./Pages/Publications";
import Interests from "./Pages/Interests";

function App() {
  const aboutRef = useRef(null);
  const interestsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);




  // --- THEME STATE ---
  // Initialize state: try localStorage, then default to 'dark' (as you requested)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Optional: Check user's system preference if no saved theme
    // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // return savedTheme || (prefersDark ? 'dark' : 'light');
    return savedTheme || 'light'; // Default to dark if nothing saved
  });

  // --- THEME EFFECT ---
  // Apply/remove 'dark' class on <html> and save preference
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save the user's preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run this effect whenever the theme state changes

  // --- THEME TOGGLE FUNCTION ---
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // --- END THEME LOGIC ---






  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          interestsRef,
          experienceRef,
          skillsRef,
          educationRef,
          publicationsRef,
        }}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-16 md:space-y-24">
        <section ref={aboutRef}>
          <AboutMe />
        </section>

        <section ref={experienceRef}>
          <Experience />
        </section>

        <section ref={interestsRef}>
          <Interests />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={educationRef}>
          <Education />
        </section>

        <section ref={publicationsRef}>
          <Publications />
        </section>
      </main>
    </div>
  );
}

export default App;
