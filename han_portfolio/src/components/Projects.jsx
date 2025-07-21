import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="border rounded p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-600 mb-2">Short description of the project.</p>
          <p className="text-sm text-gray-500">React • Tailwind • API</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
