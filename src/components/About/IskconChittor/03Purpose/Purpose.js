"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sriracha } from "next/font/google";
import { purpose } from "./purposeData";

const sriracha = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const Card = ({ p, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Adjust threshold as needed (0 to 1)
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2.5, delay: index * 0.1 }} // Delay based on index
      className={`relative h-48 min-w-60 max-w-60 border ${p.border} rounded-xl`}
    >
      <h5 className={`h-8 w-8 rounded-full ${p.color} absolute -top-4 -left-4 font-medium text-white flex justify-center items-center`}>
        {index + 1}
      </h5>
      <p className="p-3 text-justify py-5">
        {p.text}
      </p>
    </motion.div>
  );
};

const Purpose = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Adjust threshold as needed (0 to 1)
  });

  return (
    <section className="p-10">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`${sriracha.className} text-center pb-7 text-[#3c3e63]`}
      >
        Seven Purposes of ISKCON
      </motion.h1>
      <div className="flex flex-wrap gap-10 justify-center max-w-screen-xl m-auto">
        {purpose.map((p, i) => (
          <Card key={i} p={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Purpose;
