"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tenali_Ramakrishna, Yatra_One } from "next/font/google";
import { achievementsData } from "./achieveData";

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const Card = ({ achieve, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Adjust threshold as needed (0 to 1)
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }} // Delay based on index
      className="min-w-60 max-w-60 shadow-lg bg-white"
    >
      <div
        className={`${achieve.color} p-2 h-36 flex items-center justify-center hover:scale-105 duration-500 transition-all`}
        style={{
          clipPath:
            "polygon(100% 0, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0 90%, 0 0)",
        }}
      >
        <h2 className={`text-white text-center font-semibold ${yatra.className}`}>
          {achieve.data}
        </h2>
      </div>
      <div className="h-[70px] flex items-center justify-center">
        <h4 className={`${tenali.className} px-2 text-center`}>{achieve.details}</h4>
      </div>
    </motion.div>
  );
};

const Achieve = () => {
  return (
    <section className="py-20 px-5 bg-[#171056]">
      <div className="flex justify-center gap-10 max-w-screen-xl m-auto flex-wrap">
        {achievementsData.map((achieve, i) => (
          <Card key={i} achieve={achieve} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Achieve;
