import React from 'react';
import pythonLogo from '../asset/python.png';
import javaLogo from '../asset/java.png';
import tailwindLogo from '../asset/tailwind.png';
import reactLogo from '../asset/reactjs.png';
import htmlLogo from '../asset/html.png';
import cssLogo from '../asset/css.png';
import gitLogo from '../asset/git.png';
import nodejsLogo from '../asset/nodejs.png';
import githubIcon from '../asset/githubblack.png';
import linkedinIcon from '../asset/linkedin.png';

const techs = [
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'React', logo: reactLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'Node.js', logo: nodejsLogo },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-20"
    >
      {/* ABOUT ME */}
      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-sm uppercase text-gray-600 tracking-widest mb-2">About Me</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Introduction</h1>

        <div className="flex items-center gap-4 mb-4">
          <p className="text-lg text-gray-800 font-medium">Connect with me!</p>
          <a href="https://github.com/yihantan18" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/yihantan18" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
          </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-3">
          I am an undergraduate student aspiring to secure internship opportunities in software engineering.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          My passion lies in crafting innovative solutions for complex challenges.
          I enjoy full-stack development, especially user-centric design that delivers sleek and functional apps.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm currently seeking internship roles to grow my skills and explore impactful projects. Let’s connect and collaborate!
        </p>

        <a
          href="/resume_yihan.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* TECH STACK */}
      <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="bg-white p-4 rounded shadow flex flex-col items-center w-32 hover:shadow-lg transition"
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
