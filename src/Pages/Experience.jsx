import React from "react";

const Experience = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Professional
            </span>{" "}
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career journey through research and industry positions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {/* Doctoral Researcher */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-end">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
                Oct 2021 - Present
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Doctoral Researcher
                    </h3>
                    <a
                      href="https://lme.tf.fau.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      Pattern Recognition Lab, FAU Erlangen-Nürnberg
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Digital Twins
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Time Series
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      GNNs
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "My doctoral research has been highly influential in shaping
                    my perspective on AI solutions and their real-world
                    impact..."
                  </p>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      <span className="font-medium">
                        Digital Twin Development:
                      </span>{" "}
                      Developed a Digital Twin for urban heat and water supply
                      networks that synergizes multi-modal data into a unified
                      knowledge graph serving as a central knowledge base.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      <span className="font-medium">Data Engineering:</span>{" "}
                      Engineered a scalable data pipeline to process and
                      harmonize smart meter and GIS data from ~17,500 meters
                      with hourly readings spanning up to 5 years.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      <span className="font-medium">
                        Time Series Forecasting:
                      </span>{" "}
                      Developed deep learning models for multi-horizon heat and
                      water demand forecasting achieving up to 95% accuracy with
                      attention mechanisms reducing model size by 97%.
                    </span>
                  </li>
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Python
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      SQL
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Neo4j
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      PyTorch
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BASF Internship */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-end">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
                Dec 2019 - Nov 2020
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Intern - Thesis
                    </h3>
                    <a
                      href="https://plastics-rubber.basf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      Performance Materials, BASF SE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      FEM
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      C++
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Materials
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "My time at BASF marked my first experience in a large-scale
                    industrial setting and provided an opportunity to bridge
                    academic knowledge with real-world applications..."
                  </p>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      Architected a high-performance C++ simulation framework
                      integrating PDEs for finite element algorithms, to model
                      shrinkage in Fibre Reinforced Plastics (FRPs).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      Implemented and analysed numerical methods for
                      multi-physics modeling, and stress-strain relationships
                      for composite material behavior analysis.
                    </span>
                  </li>
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      C++
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      FEM
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      deal.ii
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      Abaqus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Associate */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-end">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
                Jun 2015 - Aug 2017
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Research Associate
                    </h3>
                    <a
                      href="https://www.cnde.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      CNDE, IIT Madras
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      MATLAB
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      FEM
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      NDT
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Working at CNDE, IITM was my first exposure to academic
                    research and its ecosystem. Coming from a mechanical
                    engineering background, it allowed me to take a
                    multidisciplinary approach..."
                  </p>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      Developed a finite element modeling package using MATLAB
                      and C, implementing vectorized computations and sparse
                      matrix solvers to simulate acoustic wave propagation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-3">
                      Formulated and implemented mathematical solutions for
                      PDEs, including finite difference time-domain (FDTD)
                      solvers with stability conditions.
                    </span>
                  </li>
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      MATLAB
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      C
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      FEM
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                      FDTD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
