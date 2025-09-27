"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '@/components/reusable/Navbar';
import '@fontsource/monomaniac-one';
import '@fontsource/inter';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import { projectsData } from '../../../components/data/projects';

export default function ProjectDetails() {
  const pathname = usePathname();
  const projectId = pathname?.split('/').pop();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projectsData.find((proj) => proj.id === parseInt(projectId));

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] h-screen flex justify-center items-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] overflow-hidden">
      <Navbar />
      <section id="project-details" className="min-h-screen pt-[135px] px-8 pb-20">
        <div className="max-w-[150vh] mx-auto">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10 text-center"
          >
            <h1 className="text-3xl text-white font-monomaniac font-semibold mb-4">
              {project.title}
            </h1>
          </motion.div>

          {/* Slider */}
          <div className="mb-10">
            <Slider {...settings}>
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <div className="w-full flex justify-center items-center">
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg cursor-pointer"
                      onClick={() => openModal(image)}
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Technologies */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
              <motion.div
                className="relative w-full overflow-hidden"
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-x-3 py-3 px-5 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-black/50 backdrop:blur-3xl border-2 border-[rgb(0,191,255)] text-[rgb(0,191,255)] whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {tech.icon}
                    <span className="text-sm sm:text-base">{tech.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-monomaniac text-center text-white mb-4">
              Additional Information
            </h3>
            <p className="text-gray-300 text-center font-inter">
              {project.additionalInfo}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(0,191,255)] hover:text-white font-medium text-base flex items-center"
            >
              Visit Live Site <FaExternalLinkAlt className="ml-2" />
            </a>
            <a
              href="/projects"
              className="text-[rgb(0,191,255)] hover:text-white font-medium text-base"
            >
              Back to Projects
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative max-w-5xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 cursor-pointer text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-80 px-3 py-1 rounded"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
