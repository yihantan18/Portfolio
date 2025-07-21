import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-500 text-center">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Software Intern @ SAP</h3>
          <p className="text-sm text-gray-600">June – August 2024</p>
          <p className="text-gray-700 mt-2">
            Built internal tools using React and integrated vulnerability scanning with Mend.io.
          </p>
        </div>
        {/* Add more experience blocks here */}
      </div>
    </section>
  );
};

export default Experience;
