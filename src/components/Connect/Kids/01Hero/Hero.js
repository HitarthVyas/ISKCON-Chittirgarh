"use client";

import { motion } from "framer-motion";
import { Trade_Winds } from "next/font/google";

const wind = Trade_Winds({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section
      className="bg-cover relative"
      style={{ backgroundImage: "url('/Images/Program/Kids/kid-4-waves.svg')" }}
    >
      <div className="max-w-screen-xl flex items-center lg:gap-10 pt-28 sm:pt-48 pb-32 sm:w-9/12 lg:w-full px-10 m-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:block hidden"
        >
          <img
            src="/Images/Connect/Kids/prabhupada-kid.jpg"
            className="min-w-[500px] rounded-2xl shadow-lg"
            alt="Kids Education Image"
          />
        </motion.div>
        <div className="bg-white/0 shadow-l text-white text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${wind.className} text-5xl 2xl:text-6xl mb-10`}
          >
            Kids Value Education School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-14 text-xl text-justify"
            style={{ textAlignLast: "center" }}
          >
            The sweetest goal of Value Education School is imparting holistic
            education to children to aid in the development of their character
            and personality. Children build long-lasting, Krishna conscious
            friendships based on a shared desire to love and serve Krsna.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=" h-20 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-bold rounded-xl bg-[#e75e16] hover:border-[#e75e16] hover:border-4 transition-all duration-300 hover:bg-transparent text-2xl"
            >
              Get Enrolled
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
