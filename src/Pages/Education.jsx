import React from "react";

const Education = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Academic
            </span>{" "}
            <span className="font-semibold">
              Qualifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {/* Master's Degree */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-end">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
                Oct 2017 - Sep 2021
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    <a
                      href="https://www.fau.eu/studiengang/computational-engineering-ce-msc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      Master of Science in Computational Engineering
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
                  </h3>
                  <div className="text-lg text-gray-700 dark:text-gray-300">
                    Friedrich-Alexander-University, Erlangen, Germany
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Computer Science - Mathematics - Solid Mechanics and
                    Dynamics
                  </div>
                </div>

                {/* Student Assistant */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Student Assistant
                  </h4>
                  <div className="mb-4">
                    <a
                      href="https://www.ltm.tf.fau.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      Institute of Applied Mechanics, FAU
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
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mt-1">
                      July 2018 – September 2019
                    </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 pl-5">
                    <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                      Worked on a MATLAB/C++ based code with deal.II library for
                      Multiscale Simulations of Polymers
                    </li>
                    <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                      Implemented the Capriccio method for coupling of Continuum
                      Mechanics and Molecular Dynamics
                    </li>
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Projects
                  </h4>

                  {/* Solar Panel Project */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-4">
                    <h5 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Solar Panel Defect Classification
                    </h5>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                      <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        Designed a Deep Learning framework based on Resnet using
                        PyTorch (3rd place in University Competition)
                      </li>
                      <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        Incorporated Pretrained models of ResNet-18, ResNet-32,
                        and DenseNet
                      </li>
                    </ul>
                  </div>

                  {/* Advanced Programming */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-4">
                    <h5 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Advanced Programming Projects
                    </h5>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                      <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        Hybrid CPU-/GPU-Parallelisation for Molecular Dynamics
                        using C++ and CUDA
                      </li>
                      <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        Forward Simulation and Optimization of StarCraft 2 using
                        genetic algorithms
                      </li>
                    </ul>
                  </div>

                  {/* Other Projects */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                    <h5 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      Machine Learning Implementations
                    </h5>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                      <li className="relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        Implemented various ML algorithms including K-Nearest
                        Neighbor, SVM, GMM, Random Forests, CNNs, RNNs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-end">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
                Aug 2011 - May 2015
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bachelor of Engineering in Mechanical
                </h3>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  Anna University, Chennai, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
