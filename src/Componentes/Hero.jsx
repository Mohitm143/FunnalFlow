import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import puri from "../assets/puri.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={puri}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-50">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20"
        >
          <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
            Explore Purifiers <br />
            Clean The Air You Breathe
          </h1>


          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/purifiers"
              className="px-6 py-3 rounded-lg border-2 border-white text-white text-xl hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
            >
              Explore Purifiers
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white text-xl hover:bg-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;