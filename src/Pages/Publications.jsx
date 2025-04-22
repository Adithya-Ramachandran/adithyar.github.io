import React from "react";
import SD_Centrum from "../assets/SD_Centrum.png";
import Arch from "../assets/Arch.png";
import AgglomerativeClustering from "../assets/AgglomerativeClustering.png";
import CL_Idea from "../assets/CL_Idea.png";

const Publications = () => {
  const publications = [
    {
      id: 1,
      type: "conference",
      title:
        "Advancing Heat Demand Forecasting with Attention Mechanisms: Opportunities and Challenges",
      authors:
        "Ramachandran, A., Neergaard, T. F. B., Maier, A., & Bayer, S. (2024)",
      description:
        "Presented at NeurIPS 2024 – The Thirty-Eighth Annual Conference on Neural Information Processing Systems, Vancouver, Canada",
      link: "https://www.climatechange.ai/papers/neurips2024/26",
      images: [SD_Centrum, Arch],
    },
    {
      id: 2,
      type: "journal",
      title:
        "Creating a labeled district heating data set: From anomaly detection towards fault detection",
      authors:
        "Stecher, D., Neumayer, M., Ramachandran, A., Hort, A., Maier, A., B¨ucker, D., & Schmidt, J. (2024)",
      description: "Energy (Oxford, England), 313(134016), 134016",
      link: "https://doi:10.1016/j.energy.2024.134016",
    },
    {
      id: 3,
      type: "conference",
      title:
        "Week-Ahead Water Demand Forecasting Using Convolutional Neural Network on Multi-Channel Wavelet Scalogram",
      authors: "Ramachandran, A., Mousa, H., Maier, A., & Bayer, S. (2024)",
      description: "Engineering Proceedings, 69(1), 179",
      link: "https://doi.org/10.3390/engproc2024069179",
    },
    {
      id: 4,
      type: "conference",
      title:
        "Unveiling Consumer Behavior in District Heating Network: A Contrastive Learning Approach to Clustering",
      authors: "Basak, P., Ramachandran, A., Maier, A., & Bayer, S. (2024)",
      description:
        "SESAAU2024 – Smart Energy Systems Conference. Presented at the Aalborg, Denmark",
      images: [CL_Idea, AgglomerativeClustering],
    },
    {
      id: 5,
      type: "conference",
      title:
        "Heat Demand Forecasting with Multi-Resolutional Representation of Heterogeneous Temporal Ensemble",
      authors:
        "Ramachandran, A., Chatterjee, S, Neergaard, T. F., Maier, A. K., & Bayer, S. (2022)",
      description:
        "NeurIPS 2022 Workshop on Tackling Climate Change with Machine Learning",
      link: "https://www.climatechange.ai/papers/neurips2022/46",
    },
    {
      id: 6,
      type: "journal",
      title:
        "Numerical Modelling Methods for Ultrasonic Wave Propagation Through Polycrystalline Materials",
      authors: "Shivaprasad, S., Krishnamurthy, C.V., Ramachandran, A. et al.",
      description: "Trans Indian Inst Met 72, 2923–2932 (2019)",
      link: "https://doi.org/10.1007/s12666-019-01739-4",
    },
    {
      id: 7,
      type: "conference",
      title:
        "Finite Element Modelling of Elastic Wave Propagation in Polycrystalline Media",
      authors:
        "Ramachandran, A., Shivaprasad, S., Balasubramaniam, K., & Krishnamurthy, C. (2017)",
      description:
        "Indian National Seminar & Exhibition on Non-Destructive Evaluation NDE 2016",
      link: "https://www.ndt.net/?id=21168",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Research
            </span>{" "}
            <span className="font-semibold">
              Publications
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Peer-reviewed conference papers and journal articles showcasing my
            research contributions
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300 flex flex-col"
            >
              {/* Publication Image */}
              {pub.images && pub.images.length > 0 && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={pub.images[0]}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Publication Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Publication Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      pub.type === "conference"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
                    }`}
                  >
                    {pub.type === "conference"
                      ? "Conference Paper"
                      : "Journal Article"}
                  </span>
                </div>

                {/* Publication Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {pub.authors}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {pub.description}
                </p>

                {/* Link */}
                {pub.link && (
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center transition-colors"
                    >
                      View Publication
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
