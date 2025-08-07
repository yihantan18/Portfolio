import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="h-screen flex py-20 bg-slate-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Hardware Engineer Intern @ ServerOn Sdn Bhd, Malaysia</h3>
          <p className="text-sm text-gray-600">June – August 2025</p>
          <p className="text-gray-700 mt-2">
            Installed and configured Linux , Windows Server, and Proxmox VE on physical servers, handling BIOS setup, disk partitioning, RAID configuration, and network provisioning for deployment readiness
          </p>
        </div>
        {/* Add more experience blocks here */}
      </div>
    </section>
  );
};

export default Experience;
