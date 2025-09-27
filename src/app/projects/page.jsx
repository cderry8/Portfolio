"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Navbar from '@/components/reusable/Navbar'; 
import '@fontsource/monomaniac-one';
import '@fontsource/inter';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../../components/data/projects'; 
import { motion } from 'framer-motion';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false); 

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] overflow-hidden">
      <Navbar />
      <section id="projects" className="min-h-screen pt-[180px] mx-auto p-10">
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search Projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 w-1/2 sm:w-1/3 rounded-xl bg-black/50 text-white border-2 border-[rgb(0,191,255)] focus:outline-none focus:border-[rgb(0,191,255)]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id} 
                className="bg-black/50 backdrop-blur-xl p-6 rounded-xl border-2 border-[rgb(0,191,255)] text-white hover:-translate-y-1.5 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: hasLoaded ? 1 : 0, y: hasLoaded ? 0 : 50 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} 
              >
                <h5 className="text-xl tracking-widest font-monomaniac font-medium mb-4">{project.title}</h5>
                <p className="text-sm text-gray-300 font-inter mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <Link
                    href={project.detailsUrl}
                    className="text-[rgb(0,191,255)] font-medium text-base hover:text-white"
                  >
                    View Details
                  </Link>
                 
                 
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(0,191,255)] hover:text-white font-medium flex items-center"
                  >
                    Live Site <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center col-span-4">No projects found</p>
          )}
        </div>
      </section>
    </div>
  );
}
