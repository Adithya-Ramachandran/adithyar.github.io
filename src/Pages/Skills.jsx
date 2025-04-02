import React from "react";

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Technical
            </span>{" "}
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My professional toolkit and methodologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Programming Languages
              </h3>
            </div>

            {/* Language Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Python
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                C++
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                MATLAB
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                JavaScript
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                HTML/CSS
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                SQL
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Cypher
              </span>
            </div>

            {/* Python Ecosystem */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                Python Ecosystem
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Deep Learning
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    PyTorch, Keras
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Machine Learning
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Scikit-learn, XGBoost
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Scientific Computing
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pandas, NumPy, JAX, SciPy
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Data Visualization
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plotly, Matplotlib, Folium
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    GIS
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    OSGEO, GDAL, Shapely
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Data Preprocessing
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    OpenCV, Tsfresh, PyWavelets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Tools & Frameworks
              </h3>
            </div>

            {/* Tools Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Linux
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Git
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                SSMS
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Neo4j
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Elasticsearch
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                QGIS
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Docker
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                Azure
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                HPC
              </span>
            </div>

            {/* Tech Icons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center space-x-6">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                      className="h-10 w-10"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                      alt="C++"
                      className="h-10 w-10"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="h-10 w-10"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML5"
                      className="h-10 w-10"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS3"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"
                  alt="Neo4j"
                  className="h-10 w-10"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Workflow
              </h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-3 font-medium text-gray-900 dark:text-white">
                  Data Aggregation, Preprocessing, and Pipeline
                </span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Feature Engineering
                  </span>
                  <ul className="mt-3 space-y-3 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Domain Specific Features
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Dimensionality Reduction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Feature Selection
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Machine Learning & Deep Learning
                  </span>
                  <ul className="mt-3 space-y-3 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Baselines - Analytical, Statistical, ML/DL
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Architecture Development & Training
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Inference - Performance Metrics
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Continual Learning Framework
                  </span>
                  <ul className="mt-3 space-y-3 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Drift Detection
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Retraining - Triggers & Data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Model Deployment & Monitoring
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
