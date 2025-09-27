"use client";

import { motion } from "framer-motion";
import Image from 'next/image'; 
const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] min-h-screen flex justify-center items-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg mx-auto text-center"
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <Image
            src="/404.png" 
            alt="404 Error"
            width={300}
            height={300}
            className="mx-auto"
          />
        </motion.div>

        
        <p className="text-xl text-gray-300 font-inter mb-8">
          Uh-oh! 😬 Looks like the page you're looking for is lost in the void... 🌌 It might've been moved or deleted. Don't worry, though—we've got your back! 💪
        </p>

       
        <motion.a
          href="/"
          className="text-[rgb(0,191,255)] hover:text-white font-medium text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Go back to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
