"use client";

import { Yatra_One } from "next/font/google";
import { motion } from "framer-motion";

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Intro = () => {
  return (
    <section className="sm:p-20 py-10 px-4 sm:px-7 lg:pl-32 max-w-screen-2xl m-auto">
      <div className="gap-8 lg:gap-16 flex flex-col md:flex-row items-center">
        <motion.img
          src="/Images/Program/homesatsangbg.jpg"
          className="sm:h-[500px] m-auto object-cover sm:min-w-[400px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.8 }, y: { duration: 0.8 } }}
        />
        <div>
          <motion.h1
            className={`${yatra.className} mb-3 sm:mb-8 text-[#3c3e63]`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
            }}
          >
            Home Satsang
          </motion.h1>
          <motion.div
            className="bg-[#e1dfea] mb-5 sm:mb-10 p-8 px-6 lg:w-11/12 border-l-4 border-[#ffaf2f]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              x: { duration: 0.8, delay: 0.4 },
            }}
          >
            <h5 className="text-justify">
              It&apos;s a two-hour event held in different neighborhoods in
              Pune, featuring kirtans, discourses, meditation sessions, and
              delightful Prasadam.
            </h5>
          </motion.div>
          <motion.p
            className="text-base lg:w-11/12 text-justify"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              x: { duration: 0.8, delay: 0.6 },
            }}
          >
            Home Satsang is a gathering of individuals seeking spiritual truth.
            Alongside ISKCON Chittorgarh&apos;s various programs, we can arrange
            a personalized session to be hosted at your residence.
          </motion.p>
          <motion.button
            className="bg-[#ffaf2f] py-2 text-white px-8 font-bold text-base rounded-lg mt-6 sm:mt-8 transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
