import React from "react";

function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      {/* Header Section - Photo left, Name/Info right */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 border border-gray-800 rounded-full overflow-hidden">
            <img src="profile.png" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-normal mb-4">Hi, I'm Alidar Panaguzhiyev</h1>
          <p className="text-gray-400 mb-6">Researcher, Engineer, Cosmopolitan</p>
          <div className="space-y-2 text-gray-500">
            <p>Almaty, Kazakhstan</p>
            <p>BEng @ Kazakh-British Technical University, Applied Math</p>
            <p>Working on fixing my brain</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Text left, Photo right */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-xl font-normal mb-6">My Philosophy</h2>
          <div className="space-y-4 text-gray-400">
            <p>I try to navigate this world intuitively, thinking on a scale of 2–3 years while keeping a long-term vision—something like 30 years—rooted deep in my subconscious. However, I make decisions based on the present moment, as everything changes rapidly.</p>
            <p>For a while, and even now to some extent, I've struggled with existentialism. But I've come to realize that falling into despair because of it is no different from self-destruction. The wisest approach, in my view, is to search for meaning in life and contribute to the progress of humanity—or at the very least, not be a force of destruction.</p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-md">
            <div className="h-56 border border-gray-800 rounded overflow-hidden">
              <img src="philosophy.png" alt="Research" className="h-full w-full object-cover" />
            </div>
            <p className="text-gray-600 text-xs mt-2">Baikonur Cosmodrome, May 2024</p>
          </div>
        </div>
      </section>

      {/* ML and Data Science Projects Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-xl font-normal mb-8">ML & Data Science Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traffic Flow Prediction */}
          <div className="border border-gray-800 rounded p-6 hover:bg-gray-900 transition duration-300">
            <h3 className="text-lg mb-3">Traffic Flow Prediction</h3>
            <p className="text-gray-400 mb-4">
              Developed a machine learning model for predicting road congestion based on time series analysis.
              Conducted data analysis and visualization using Pandas and Matplotlib.
              Applied Feature Engineering methods, including temporal feature extraction.
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Python, Pandas, Matplotlib, ML</span>
              <span>2024</span>
            </div>
          </div>
          
          {/* Spam Classification */}
          <div className="border border-gray-800 rounded p-6 hover:bg-gray-900 transition duration-300">
            <h3 className="text-lg mb-3">Spam Classification From Scratch</h3>
            <p className="text-gray-400 mb-4">
              Developed an SMS-spam classifier using logistic regression and TF-IDF.
              Implemented text preprocessing methods for data cleaning and normalization.
              Achieved F1-score of 0.92-0.94 on test data with cross-validation.
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Python, NLP, Kaggle Dataset</span>
              <span>2024</span>
            </div>
          </div>
          
          {/* Home Price Prediction */}
          <div className="border border-gray-800 rounded p-6 hover:bg-gray-900 transition duration-300">
            <h3 className="text-lg mb-3">Home Price Prediction</h3>
            <p className="text-gray-400 mb-4">
              Developed a machine learning model for real estate price estimation.
              Used gradient boosting (XGBoost) to improve prediction accuracy.
              Implemented feature engineering to extract meaningful patterns from property data.
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Python, XGBoost, Data Analysis</span>
              <span>2023</span>
            </div>
          </div>
          
          {/* Resume Parsing */}
          <div className="border border-gray-800 rounded p-6 hover:bg-gray-900 transition duration-300">
            <h3 className="text-lg mb-3">Resume Parsing</h3>
            <p className="text-gray-400 mb-4">
              Developed a tool for automatic data extraction from resumes.
              Used Natural Language Processing and regular expressions to identify and categorize resume sections.
              Created a system that streamlines the hiring process by automating candidate information extraction.
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Python, NLP, RegEx</span>
              <span>2024</span>
            </div>
          </div>

          {/* nFactorial Incubator AI Project */}
          <div className="border border-gray-800 rounded p-6 hover:bg-gray-900 transition duration-300">
            <h3 className="text-lg mb-3">AI Blood Analysis System</h3>
            <p className="text-gray-400 mb-4">
              Developed a blood analysis system using OpenAI API that provides personalized recommendations.
              Created as part of the nFactorial Incubator program.
              Focused on making medical information more accessible through AI interpretation.
            </p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>OpenAI API, Python</span>
              <span>Summer 2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
