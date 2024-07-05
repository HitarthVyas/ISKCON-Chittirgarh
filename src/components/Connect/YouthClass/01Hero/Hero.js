"use client";

import { motion } from "framer-motion";
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover"
      style={{ backgroundImage: "url('/Images/Connect/Youth/youth_bg.svg')" }}
    >
      <div className="h-screen bg-[black]/75">
        <div className="flex items-center justify-center h-full xl:gap-16 gap-10 sm:py-20 px-5 sm:px-10 max-w-screen-xl m-auto">
          <div className="lg:w-full sm:w-10/12 w-full">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${marker.className} mb-10 text-white text-6xl xl:text-7xl text-center lg:text-left`}
            >
              Youth Forum
            </motion.h1>
            <div className="text-white text-base sm:text-lg text-justify">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-4"
              >
                ISKCON Chittorgarh's seminars and workshops promote the study of
                Srila Prabhupada's books and a lifestyle based on Vedic
                scriptures. They encourage the application and teaching of
                philosophical principles, practical lessons from scriptures, and
                cooperation despite differences.
              </motion.p>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                These programs educate youth on Srila Prabhupada's teachings
                through interactive classes. Weekend sessions focus on applying
                Vedic wisdom to modern challenges and offer courses like
                &apos;Art of Mind Control&apos; and &apos;Secrets of
                Success&apos; to foster reflection and introspection.
              </motion.p>
            </div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <button className="bg-[#ca0b18] mt-10 font-medium text-white text-xl px-8 py-1.5 hover:bg-white hover:text-[#ca0b18] duration-500 transition-all">
                Get Connected
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="p-0.5 rounded-3xl border-gray-600 border hidden lg:block"
          >
            <img
              src="/Images/Connect/Youth/main.jpg"
              className="min-w-[450px] h-96 object-cover rounded-3xl hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
