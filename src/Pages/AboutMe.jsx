import React from "react";
import ProfilePicture from "../assets/profilepicture2.png";

const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-3/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
                Hi, I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Adithya
                </span>{" "}
                Ramachandran
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Doctoral Researcher
                </span>{" "}
                at FAU Erlangen-Nürnberg
              </h2>
            </div>

            <p className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Data Scientist and Doctoral Researcher with deep expertise in time-series forecasting, large-scale data engineering, and deploying production ML systems. Delivered significant accuracy gains and efficiency improvements in demand modeling using Python, SQL, and PyTorch. Skilled in handling multi-modal data, implementing automated MLOps workflows, unsupervised pattern discovery, and real-time anomaly detection to support critical decision-making and resource management.
            </p>

            
            <p className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            At heart, I am a problem-solver who enjoys leveraging an analytical mindset to navigate complexity. Seeing the direct connection between rigorous data analysis, innovative modeling, and meaningful outcomes is what truly drives my work. I am passionate about using data to drive impactful decisions and am always eager to learn and grow in this ever-evolving field. I thrive in collaborative environments where I can share knowledge and learn from others, and I am excited about the opportunity to contribute to projects that make a difference.
            </p>



            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                    Email
                  </h3>
                  <ul className="space-y-2 mt-1">
                    <li>
                      <a
                        href="mailto:adithyaramachandran@gmail.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        adithyaramachandran@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:adithya.ramachandran@fau.de"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        adithya.ramachandran@fau.de
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                    Location
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/yM8U45qok7b4Cz8P7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-1"
                  >
                    Pattern Recognition Lab
                    <br />
                    Friedrich-Alexander-Universität
                    <br />
                    Erlangen, Germany
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/adithya-ramachandran94/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors p-3 rounded-lg"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Adithya-Ramachandran"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors p-3 rounded-lg"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://lme.tf.fau.de/person/adithya-ramachandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors p-3 rounded-lg"
                aria-label="PRL Lab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm -mt-35">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src={ProfilePicture}
                  alt="Adithya Ramachandran"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
