"use client"
import Navbar from '@/components/reusable/Navbar';
import Image from 'next/image';
import '@fontsource/monomaniac-one';
import '@fontsource/inter';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] overflow-auto">
      <Navbar />
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-center min-h-screen px-6 sm:px-12 pt-[140px] sm:pt-[120px] overflow-hidden mb-10 sm:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-full z-0 overflow-hidden sm:w-1/2 mb-10 flex items-center justify-center rounded-md bg-black/30 backdrop-blur-sm border-2 border-[rgb(0,191,255)] h-[400px] sm:h-[500px] sm:order-1 order-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div
            className="h-[93%] w-[93%] rounded-md bg-cover bg-center"
            style={{ backgroundImage: 'url(/pic.jpg)' }}
          />
        </motion.div>

        <motion.div
          className="text-white w-full overflow-hidden sm:w-[90%] md:w-[80%] max-w-4xl space-y-6 flex flex-col justify-center sm:text-left sm:order-0 order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.h1
            className="text-4xl mb-8 sm:text-5xl font-bold tracking-wide text-[rgb(0,191,255)] font-monomaniac"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            👋 Hey there! My Name Is
          </motion.h1>

          <motion.h1
            className="text-4xl sm:text-5xl mb-8 font-bold tracking-wide text-white font-monomaniac"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <span>CYUBAHIRO DERRICK</span> 🎉
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl mb-10 text-lg text-gray-300 font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          >
            👨‍💻 I’m an 18-year-old software developer passionate about building cool and impactful projects.
            Started young and continued growing through various real-world experiences. 🚀
            I do it because I love creating solutions that make a difference, not just for money! 💙
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.7 }}
          >
            <button className="bg-[rgb(0,191,255)] cursor-pointer text-white tracking-wider py-2 px-6 rounded-full text-lg hover:bg-teal-500 transition font-monomaniac">
              <Link href={'/projects'}>🔍 View My Projects</Link>
            </button>
            <button className="border-2 border-[rgb(0,191,255)] cursor-pointer tracking-wider text-[rgb(0,191,255)] py-2 px-6 rounded-full text-lg hover:bg-[rgb(0,191,255)] hover:text-white transition font-monomaniac">
              <Link href={'/contact'}>🤝 Collaborate With Me</Link>
            </button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
