import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
      <form
        action="https://formspree.io/f/your-form-id"  // Replace with real ID
        method="POST"
        className="max-w-xl mx-auto space-y-5 bg-white shadow-lg rounded-lg p-8"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
