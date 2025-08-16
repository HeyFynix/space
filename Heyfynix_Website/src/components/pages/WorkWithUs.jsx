import React from "react";
import { motion } from "framer-motion";
import robot from "../Images/Robot.png";
import globe from "../Images/Globe.png";

function WorkWithUs() {
  return (
    <>
      {/* Section 1 - Globe Background */}
     <div className="relative w-full h-screen flex items-center justify-center bg-[#010919] overflow-hidden">

      <motion.h1
        className="relative -mt-80 z-10 text-white font-bold text-3xl md:text-5xl lg:text-6xl text-center px-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        We tell Stories the world remembers
      </motion.h1>
      {/* Globe Background (behind text) */}
      <motion.img
        src={globe}
        alt="Earth"
        className="absolute inset-0 w-full h-full mt-44 object-contain opacity-70"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Content (always above globe) */}
    
    </div>

      {/* Section 2 - Robot Background */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${robot})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 px-6 md:px-16 lg:px-24 text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white text-start italic text-xl md:text-2xl font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We Create
          </motion.p>

          <motion.h1
            className="text-white italic text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            MUSIC <span className="text-white italic">VIDEOS</span>
          </motion.h1>

          <motion.p
            className="text-white text-end italic text-lg md:text-xl mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            in sync with every beat
          </motion.p>

          {/* Blue line centered */}
          <motion.div
            className="w-48 h-[2px] bg-blue-500 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </>
  );
}

export default WorkWithUs;
