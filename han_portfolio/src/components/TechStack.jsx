import React from 'react';

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="flex justify-center flex-wrap gap-6">
        <span className="bg-white px-4 py-2 rounded shadow">Python</span>
        <span className="bg-white px-4 py-2 rounded shadow">Java</span>
        <span className="bg-white px-4 py-2 rounded shadow">Tailwind CSS</span>
        <span className="bg-white px-4 py-2 rounded shadow">React</span>  
        <span className="bg-white px-4 py-2 rounded shadow">HTML</span>
        <span className="bg-white px-4 py-2 rounded shadow">JavaScript</span>
      </div>
    </section>
  );
};

export default TechStack;
