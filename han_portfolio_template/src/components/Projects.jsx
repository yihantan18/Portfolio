import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex py-20 bg-slate-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}      // ✅ Use the line here
          navigation
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="rounded-lg"
        >
          <SwiperSlide>
            <a
              href="https://github.com/yihantan18/CampusCookery"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg p-6 shadow hover:shadow-lg transition duration-300 bg-white text-left"
            >
              <img
                src="/assets/campuscookery-preview.png"
                alt="Campus Cookery Preview"
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Campus Cookery</h3>
              <p className="text-gray-600 mb-2">A platform for students to share and discover recipes.</p>
              <p className="text-sm text-gray-500">Django • HTML+CSS+JS</p>
            </a>
          </SwiperSlide>

          {/* 🔁 Add more <SwiperSlide> blocks for other projects */}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
