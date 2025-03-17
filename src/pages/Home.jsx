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
          <p className="text-gray-400 mb-6">Machine Learning Researcher, Cosmopolitan</p>
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
            <p>I try to navigate this world intuitively, thinking on a scale of 2–3 years while keeping a long-term vision—something like 30 years—rooted deep in my subconscious. However, I make decisions based on the present moment, as everything changes rapidly.  </p>
<p>For a while, and even now to some extent, I've struggled with existentialism. But I’ve come to realize that falling into despair because of it is no different from self-destruction. The wisest approach, in my view, is to search for meaning in life and contribute to the progress of humanity—or at the very least, not be a force of destruction.
            </p>
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
    </div>
  );
}

export default Portfolio;