import React from "react";

// Reusable checkmark icon component
const CheckIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);

// Reusable right arrow icon for sub-lists
const ArrowRightIcon = ({ className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
    </svg>
);

const Skills = () => {
  // Data for skills
  const languages = ["Python", "C++", "MATLAB", "JavaScript", "HTML/CSS", "SQL", "Cypher"];
  const tools = ["Linux", "Git", "SSMS", "Neo4j", "Elasticsearch", "QGIS", "Docker", "Azure", "HPC"];

  const pythonEcosystem = [
    { title: "Deep Learning", items: "PyTorch, Keras" },
    { title: "Machine Learning", items: "Scikit-learn, XGBoost" },
    { title: "Scientific Computing", items: "Pandas, NumPy, JAX, SciPy, Statsmodels" },
    { title: "Data Visualization", items: "Plotly, Matplotlib, Folium" },
    { title: "GIS", items: "OSGEO, GDAL, Shapely" },
    { title: "Web Scraping", items: "BeautifulSoup, Scrapy" },
    { title: "Database", items: "PyMySQL, SQLAlchemy, PyODBC" },
    { title: "Configuration Management", items: "Hydra, OmegaConf" },
    { title: "Data Preprocessing", items: "OpenCV, Tsfresh, PyWavelets, Scipy.signal, STUMPY" },
    { title: "Others", items: "Weights & Biases, Optuna, ONNX" },
  ];

  // Icon data (using Devicon CDN links)
  const toolIcons = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Neo4j", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original-wordmark.svg" }, // Added wordmark version
    { name: "Elasticsearch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" }, // Added wordmark version
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    // Add more icons here if available/needed (e.g., SQL Server for SSMS, generic database for SQL etc.)
     { name: "Microsoft SQL Server", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" }, // For SSMS
    //  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" }, // Example SQL DB
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Technical
            </span>{" "}
            <span className="font-semibold">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional toolkit and methodologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* --- Column 1: Programming Languages --- */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Languages & Databases
              </h3>
            </div>
            {/* Language Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {languages.map(lang => (
                <span key={lang} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                  {lang}
                </span>
              ))}
            </div>
            {/* Python Ecosystem */}
            <div className="flex-grow">
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                Python Ecosystem
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pythonEcosystem.map(category => (
                  <div key={category.title} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h5 className="font-medium mb-1 text-gray-900 dark:text-white text-sm">
                      {category.title}
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {category.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Column 2: Tools & Frameworks --- */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300 flex flex-col"> {/* Added flex flex-col */}
             {/* Card Header */}
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Tools & Frameworks
              </h3>
            </div>
            {/* Tools Tags */}
            <div className="flex flex-wrap gap-2 mb-6"> {/* Added mb-6 */}
              {tools.map(tool => (
                <span key={tool} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
            {/* --- Icon Section --- */}
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700"> {/* mt-auto pushes this section down */}

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-20">
                  {toolIcons.map(icon => (
                      <img
                          key={icon.name}
                          src={icon.src}
                          alt={icon.name}
                          className="h-8 w-8 sm:h-10 sm:w-10 object-contain" // Adjusted size
                          title={icon.name} // Add title for tooltip on hover
                      />
                  ))}
              </div>
            </div>
            {/* --- End Icon Section --- */}
          </div>

          {/* --- Column 3: Workflow --- */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
             {/* Card Header */}
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Workflow & Methodologies
              </h3>
            </div>
            {/* Workflow List */}
            <ul className="space-y-4">
              {/* Item 1 */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400"><CheckIcon /></div>
                <span className="ml-3 text-base font-medium text-gray-800 dark:text-gray-200">Data Aggregation, Preprocessing, and Pipeline</span>
              </li>
              {/* Item 2 */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400"><CheckIcon /></div>
                <div className="ml-3">
                  <span className="text-base font-medium text-gray-800 dark:text-gray-200">Feature Engineering</span>
                  <ul className="mt-2 space-y-2 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Domain Specific Features</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Dimensionality Reduction</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Feature Selection</span></li>
                  </ul>
                </div>
              </li>
            {/* Item 3 */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400"><CheckIcon /></div>
                <div className="ml-3">
                  <span className="text-base font-medium text-gray-800 dark:text-gray-200">Machine Learning & Deep Learning</span>
                  <ul className="mt-2 space-y-2 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Baselines - Analytical, Statistical, ML/DL</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Architecture Development & Training</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Inference & Evaluation</span></li>
                  </ul>
                </div>
              </li>
              {/* Item 4 */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400"><CheckIcon /></div>
                <div className="ml-3">
                  <span className="text-base font-medium text-gray-800 dark:text-gray-200">Continual Learning Framework</span>
                  <ul className="mt-2 space-y-2 pl-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Drift Detection & Analysis</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Retraining Strategy (Triggers & Data)</span></li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-500"><ArrowRightIcon/></div><span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Model Deployment & Monitoring (MLOps)</span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div> {/* End Workflow Card */}

        </div> {/* End Skills Grid */}
      </div>
    </section>
  );
};

export default Skills;