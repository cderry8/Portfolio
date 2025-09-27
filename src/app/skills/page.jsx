"use client"
import Navbar from '@/components/reusable/Navbar';
import { Html, Css, JavaScript, Tailwind, Next, ReactJS, TypeScript, NodeJS, Express, Figma, PHP, SQL, MongoDB, Flutter, Git, AWS, Python } from '@/components/data/technologies';
import { motion } from 'framer-motion'; 

export default function Skills() {
  const technologies = [
    Html,
    Css,
    JavaScript,
    Tailwind,
    Next,
    ReactJS,
    TypeScript,
    NodeJS,
    Express,
    Figma,
    PHP,
    SQL,
    MongoDB,
    Flutter,
    Git,
    AWS,
    Python,
  ];

  return (
    <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] overflow-hidden">
      <Navbar />
      <section id="skills" className="min-h-screen pt-[200px] mx-auto p-10">
        <h4 className="text-3xl sm:text-4xl font-bold text-center font-inter text-white mb-10 sm:mb-14">
          Technologies I Use
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-black/50 backdrop:blur-3xl border-2 border-[rgb(0,191,255)] text-[rgb(0,191,255)] whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              {tech.icon} {tech.label}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
