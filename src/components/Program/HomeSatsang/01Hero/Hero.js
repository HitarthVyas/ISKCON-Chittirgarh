import { motion } from "framer-motion";
import { Permanent_Marker } from "next/font/google";
import React from "react";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-right h-screen w-full"
      style={{
        backgroundImage:
          "url('https://iskconghaziabad.com/wp-content/uploads/2023/11/lord-chaitanay.webp')",
      }}
    >
      <div className="absolute w-full top-[20vh]">
        <motion.h1
          className={`${marker.className} text-center text-white p-5 text-5xl sm:text-6xl`}
          style={{
            textShadow:
              "0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 , duration: 0.4 }}
        >
          Home Satsang
        </motion.h1>
      </div>

      <div className="absolute bottom-[15vh] w-full flex justify-center">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="group flex transition-all duration-700 rounded-full hover:text-[#171056] text-white justify-center gap-2 hover:bg-[#e1dfea] bg-[#2e5697] px-4 py-2 items-center hover:px-6 hover:py-3 hover:shadow-xl"
        >
          <span className="text-xl font-semibold">Contact Us</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
