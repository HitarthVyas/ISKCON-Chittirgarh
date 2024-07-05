"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section>
      <div>
        <img
          src="/Images/Home/iskcon-chittor-bg.jpeg"
          className="w-full h-[100vh] object-cover bg-top"
        />
      </div>
      <div className="inset-0 bg-black/50 absolute" />
      <div className="absolute top-[15vh] w-full">
        <motion.div
          className="w-full flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <img
            src="/Images/Home/sssjbss.png"
            alt="Sample Image"
            className="w-72 md:w-[500px]"
          />
        </motion.div>
        <div
          className="text-white w-full -my-4 sm:-my-5 md:-my-10 flex justify-center"
          style={{ textShadow: "0px 0px 15px black, 0px 0px 15px black" }}
        >
          <AnimatedText text="Shri Jagannath Mandir" />
        </div>
      </div>

      <div className="absolute bottom-[15vh] w-full flex justify-center">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="group flex transition-all duration-700 rounded-full hover:text-[#171056] text-white justify-center gap-2 hover:bg-[#e1dfea] bg-[#2e5697] px-4 py-2 items-center hover:px-6 hover:py-3 hover:shadow-xl"
        >
          <span className="text-xl font-semibold">Location</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current group-hover:text-[#171056] text-white transition-all duration-700"
          >
            <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
