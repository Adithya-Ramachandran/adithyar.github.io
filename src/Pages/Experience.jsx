import React, { useState } from 'react';

// Reusable component for the interactive responsibility section (no changes needed here)
const InteractiveResponsibilities = ({ title, responsibilitiesData, className = "" }) => {
  // ... (Keep the component code from the previous version, including the renderContent helper)
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(prevId => (prevId === id ? null : id));
  };

  const selectedResponsibility = responsibilitiesData.find(
    (resp) => resp.id === selectedId
  );

  // Helper function to render content with paragraphs
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className={index > 0 ? 'mt-4' : ''}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className={`mt-6 ${className}`}>
      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
        {title || "Key Responsibilities & Learnings:"}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {responsibilitiesData.map((resp) => (
          <button
            key={resp.id}
            onClick={() => handleClick(resp.id)}
            className={`
              p-3 rounded-lg border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-400
              ${selectedId === resp.id
                ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-600 shadow-md ring-1 ring-blue-300 dark:ring-blue-700'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }
            `}
          >
            <span className={`font-medium ${selectedId === resp.id ? 'text-blue-800 dark:text-blue-100' : 'text-gray-800 dark:text-gray-200'}`}>
              {resp.title}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 min-h-[150px] transition-opacity duration-300 ease-in-out">
        {selectedResponsibility ? (
          <article className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-justify">
            {renderContent(selectedResponsibility.content)}
          </article>
        ) : (
          // Updated placeholder since quote is always visible now
          <p className="text-gray-500 dark:text-gray-400 italic text-center py-4">
            Click an item above for more details.
          </p>
        )}
      </div>
    </div>
  );
};


// --- Main Experience Component ---
const Experience = () => {

  // --- Data for each experience section ---
  const doctoralResponsibilities = [
    {
      id: 'doc-reflection',
      title: 'Overall Reflection',
      content: 'My PhD experience has been instrumental in shaping my problem-solving mindset and reinforcing my passion for impactful AI solutions. I thrived in working with complex, real-world data—especially smart meter readings at the household level. Managing thousands of time series, each with unique consumption patterns and influencing variables, helped me sharpen my analytical and critical thinking skills. I approached challenges with curiosity and persistence, such as uncovering insights from high forecasting errors that aligned with events like school closures or identifying hidden consumer behavior patterns through unsupervised learning. These experiences taught me to trust my intuition, validate assumptions, and see patterns that are often only obvious in hindsight. I actively worked across multiple data modalities—integrating smart meter, SCADA, GIS, and public datasets—to build robust, cross-functional solutions. This helped me develop strong parallel thinking and a deep appreciation for interdisciplinary problem-solving. My work with GIS data in urban logistics further strengthened my attention to detail and perseverance, as I spent hours interpreting spatial networks and metadata to detect hidden relationships. Designing data-driven validation frameworks and seeing them succeed was both challenging and incredibly motivating. Beyond the technical work, I found deep value in collaborating with fellow researchers, exchanging ideas, and exploring innovative solutions together. These interactions not only broadened my domain expertise in AI and utility networks but also enhanced my ability to communicate complex ideas clearly and effectively. This journey has shaped me into a proactive, adaptable, and solutions-oriented professional, ready to take on new challenges in data science, AI, or applied research environments where innovation and real-world impact matter.'
    },
    {
      id: 'doc-dt',
      title: 'Digital Twin Development',
      content: ' Developed a Digital Twin for urban heat and water supply networks that synergizes multi-modal data (smart meters, SCADA, GIS, structured and unstructed documents) into a unified knowledge graph serving as a central knowledge base. Utilized Python for data processing, NetworkX for network analysis, and Neo4j for graph-based inference. Developed a web application with HTML, CSS, and JavaScript for interactive visualization, enhancing infrastructure monitoring and decision-making. Integrated Large Language Models (LLMs) for natural language queries, enabling intuitive interaction with the knowledge graph.'
    },
    {
      id: 'doc-data-eng',
      title: 'Data Engineering & Pipeline',
      content: 'Engineered a scalable data pipeline to process and harmonize smart meter and GIS data. Managed ~17,500 meters with hourly readings spanning up to 5 years, alongside an SQL-based utility database over 30,000 infrastructure components, and other public resources such as cadastre data, and building information. Applied analytical and relational techniques to extract meaningful features, enabling ML-driven solutions for varying downstream tasks.'
    },
    {
      id: 'doc-tsf',
      title: 'Time Series Forecasting',
      content: 'Developed deep learning models for multi-horizon heat and water demand forecasting using advanced feature representations (time-frequency analysis, seasonal decomposition, multi-variate relationships), achieving up to 95% accuracy. Improved forecasting by 10%-40% across rural and urban districts compared to statistical (ARIMA, SARIMAX, VAR), Machine Learning (Random Forest, XGBoost) and Deep Learning (RNNs - LSTM, GRU; Transformer - Preformer, Informer, Autoformer, PatchTST; State-of-the-Art - Timenet; Foundational Models - Tiny Time Mixers) models. Leveraged attention mechanisms to reduce model size by 97% while maintaining accuracy, enabling optimal resource management, cost savings, and reduced emissions.',
    },
    {
      id: 'doc-mlops',
      title: 'MLOps & Continuous Learning',
      content: 'Implemented an automated MLOps framework for continuous forecast monitoring and automated model retraining in a production-like environment. Addressed data drift challenges, ensuring sustained predictive performance and enabling proactive maintenance of high-accuracy models operationally.',
    },
    {
      id: 'doc-unsupervised',
      title: 'Unsupervised Learning & Analysis',
      content: 'Constructed a contrastive representation learning framework to identify distinct consumption patterns across residential, commercial, and agricultural sectors using smart meter data. Analyzed variations in consumption of individual consumers and across different consumers at a faily, weekly and monthly time scales, enabling behavioral insights, region-specific demand analysis, and proactive grid optimization.',
    },
    {
      id: 'doc-leakage',
      title: 'Anomaly Detection & Infrastructure Optimization',
    content: 'Designed analytical and ML-driven anomaly detection models for real-time monitoring such as leakage detection and localization, aiding predictive maintenance and optimizing grid efficiency. Applied graph based link prediction techniques to optimize highly interconnected networks for missing, or anomalous data points.',
    },
    {
      id: 'doc-documentdigitization',
      title: 'Document Digitization',
    content: 'Prepared a dataset of scanned documents contianing utility network information, including schematics, maps, and technical specifications as structured documents. Developed a pipeline for document digitization and data extraction using OCR and NLP techniques, enabling efficient data retrieval and integration into the knowledge graph. This facilitated improved access to critical information for decision-making and analysis.',
    },
  ];

  const internResponsibilities = [
    {
      id: 'intern-reflection',
      title: 'Overall Reflection',
      content: 'My time at BASF marked my first experience in a large-scale industrial setting and provided an opportunity to bridge academic knowledge with real-world applications. Transitioning from C++ academic projects to industrial implementation was insightful. Additionally, I gained a deeper appreciation for the importance of confidentiality, particularly in handling internal tools and proprietary technologies. This period also coincided with the onset of the COVID-19 pandemic. Just two weeks into my masters thesis, lockdown measures were implemented, requiring me to quickly adapt my plans, working environment, and discipline. Architected a high-performance C++ simulation framework integrating PDEs for finite element algorithms, to model shrinkage in Fibre Reinforced Plastics (FRPs) to enable fast, accurate simulations to assist consumers in formulating the optimal FRP designs for their needs.'
    },    
    {
      id: 'intern-cpp',
      title: 'C++ Simulation Framework',
      content: 'Architected and implemented a high-performance C++ simulation framework integrating Partial Differential Equations (PDEs) solved via finite element (FE) algorithms. The primary application was modeling material shrinkage phenomena in Fibre Reinforced Plastics (FRPs) during manufacturing processes.',
    },
    {
      id: 'intern-numerical',
      title: 'Numerical Methods & Analysis',
      content: 'Implemented, tested, and analysed various numerical methods suitable for multi-physics modeling scenarios. Focused specifically on capturing accurate stress-strain relationships for composite materials to enable detailed analysis of their mechanical behavior under various simulated conditions. Integrated commercial FE tool capabilities where appropriate.',
    },
  ];

  const associateResponsibilities = [
    {
      id: 'assoc-reflection',
      title: 'Overall Reflection',
      content: 'Working at CNDE, IITM was my first exposure to academic research and its ecosystem. Coming from a mechanical engineering background, it allowed me to take a multidisciplinary approach by integrating programming into mechanical applications. Writing physical equations governing material behavior and solving them numerically was an exciting challenge. This experience brought many first-time realizations, such as the speed-up in execution through vectorization, understanding marching in time and space with respect to numerical methods, using symbolic math to precompute values instead of performing matrix multiplications, and running overnight simulations leading up to my first conference. This period not only deepened my appreciation for programming but also gave me the confidence to pursue a masters degree in computational engineering. Developed a finite element modeling package using MATLAB and C, implementing vectorized computations and sparse matrix solvers to simulate acoustic wave propagation in polycrystalline materials through custom discretization schemes.',
    },
    {
      id: 'assoc-fem',
      title: 'FEM Modeling Package (MATLAB/C)',
      content: 'Developed a custom finite element modeling package primarily using MATLAB, with performance-critical sections implemented in C. Focused on leveraging vectorized computations and efficient sparse matrix solvers to simulate acoustic wave propagation through complex polycrystalline materials for non-destructive evaluation (NDE) applications.',
    },
    {
      id: 'assoc-pde',
      title: 'PDE Solvers (FDTD)',
      content: 'Formulated the mathematical basis and implemented numerical solutions for relevant Partial Differential Equations (PDEs) governing wave phenomena. Developed finite difference time-domain (FDTD) solvers, including the analysis and implementation of stability conditions (like the CFL condition) to ensure accurate and reliable simulation results.',
    },
  ];


  return (
    <section id="experience" className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* ... header content ... */}
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Professional</span> Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career journey through research and industry positions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">

          {/* --- Doctoral Researcher --- */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-start md:justify-end">
             {/* ... date span ... */}
            <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">Oct 2021 - Present</div>
            </div>
            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                   {/* ... title, link, tags ... */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Doctoral Researcher</h3>
                    <a href="https://lme.tf.fau.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                    Pattern Recognition Lab, FAU & Diehl Metering GmbH
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Digital Twins</span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Time Series</span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">MLOps</span>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">GNNs</span>
                  </div>

                </div>

                {/* --- ADDED QUOTE BLOCK BACK --- */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                  "My doctoral research focuses on leveraging AI for sustainable urban infrastructure management, bridging data engineering, advanced forecasting, and digital twin concepts."
                  </p>
                </div>
                 {/* --- END OF QUOTE BLOCK --- */}

                {/* Interactive Responsibilities */}
                <InteractiveResponsibilities responsibilitiesData={doctoralResponsibilities} />

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                   {/* ... tech stack content ... */}
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Python</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">SQL</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">PyTorch</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Neo4j</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Pandas</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Docker</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Git</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Time Series Modeling</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Statistical Methods</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Contrastive Representational Learning</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Anomaly Detection</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Preprocessing Pipeline</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Wavelets</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Machine Learning</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Deep Learning</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Continous Learning Learning</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Continous Learning Learning</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Graph Neural Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- BASF Internship --- */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
             {/* Date */}
            <div className="md:col-span-1 flex md:justify-start md:justify-end">
               {/* ... date span ... */}
                <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">Dec 2019 - Nov 2020</div>
            </div>
            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    {/* ... title, link, tags ... */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Intern - Thesis</h3>
                        <a href="https://plastics-rubber.basf.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                          Performance Materials, BASF SE
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">FEM Simulation</span>
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Fiber Reinforced Plastics</span>
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Material Modelling</span>
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">In-house C++ Solver</span>
                  </div>  
                </div>

                 {/* --- ADDED QUOTE BLOCK BACK --- */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                  "My time at BASF marked my first experience in a large-scale industrial R&D setting, bridging academic simulation knowledge with real-world material science challenges."
                  </p>
                </div>
                 {/* --- END OF QUOTE BLOCK --- */}

                {/* Interactive Responsibilities */}
                <InteractiveResponsibilities responsibilitiesData={internResponsibilities} />

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                    {/* ... tech stack content ... */}
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">C++</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">FEM</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">deal.II</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Abaqus</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Linux</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Research Associate --- */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Date */}
            <div className="md:col-span-1 flex md:justify-start md:justify-end">
               {/* ... date span ... */}
                <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">Jun 2015 - Aug 2017</div>
            </div>
            {/* Content */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Research Associate</h3>
                        <a href="https://www.cnde.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                        CNDE, IIT Madras
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Non-Destructive Testing</span>
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Ultrasonic - Acoustic Wave Propagation</span>
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">In-house FEM Solver</span>
                    </div>
                </div>

                 {/* --- ADDED QUOTE BLOCK BACK --- */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                  "My first foray into academic research at IITM involved developing computational tools for non-destructive testing, demanding a deep dive into numerical methods and physics-based modeling."
                  </p>
                </div>
                 {/* --- END OF QUOTE BLOCK --- */}

                {/* Interactive Responsibilities */}
                <InteractiveResponsibilities responsibilitiesData={associateResponsibilities} />

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                    {/* ... tech stack content ... */}
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">MATLAB</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">C</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">FEM</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">FDTD</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">HPC</span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> {/* End Timeline space-y-12 */}
      </div>
    </section>
  );
};

export default Experience;