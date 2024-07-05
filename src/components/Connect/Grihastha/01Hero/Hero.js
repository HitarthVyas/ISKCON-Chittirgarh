"use client";

import { motion } from "framer-motion";
import { Trade_Winds, Yatra_One } from "next/font/google";

const wind = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-tr from-[#3c3e63] via-[#2e5697] to-[#9eadc6] bg-cover bg-right"
      style={{
        backgroundImage:
          "url('/Images/Connect/Grihastha/krishna-kid-g.jpg')",
      }}
    >
      <div className="bg-black/70">
        <div className="max-w-screen-xl flex items-center lg:gap-10 pt-24 lg:pt-40 pb-32 sm:w-9/12 lg:w-full px-10 m-auto">
          <div className="bg-white/0 shadow-l text-white text-center">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`${wind.className} text-5xl 2xl:text-6xl mb-10`}
            >
              Grihastha Course
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-4 text-lg text-justify"
              style={{ textAlignLast: "center" }}
            >
              The sweetest goal of Value Education School is imparting holistic
              education to children to aid in the development of their character
              and personality. Children build long-lasting, Krishna conscious
              friendships based on a shared desire to love and serve Krsna.
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-14 text-lg text-justify"
              style={{ textAlignLast: "center" }}
            >
              The sweetest goal of Value Education School is imparting holistic
              education to children to aid in the development of their character
              and personality. Children build long-lasting, Krishna conscious
              friendships based on a shared desire to love and serve Krsna.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-20 flex items-center justify-center"
            >
              <button className="px-8 py-3 font-bold rounded-xl bg-[#e75e16] hover:border-[#e75e16] hover:border-4 transition-all duration-300 hover:scale-105 hover:py-2 hover:bg-transparent text-2xl">
                Get Enrolled
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className=""
          >
            <img
              src="/Images/Connect/Grihastha/krishna-grihastha.jpg"
              className="min-w-[450px] rounded-2xl shadow-lg lg:block hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
