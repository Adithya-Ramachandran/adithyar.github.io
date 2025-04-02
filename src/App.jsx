import { useRef } from "react";
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
