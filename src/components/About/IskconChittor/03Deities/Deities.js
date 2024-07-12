"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Dancing_Script,
  Sriracha,
  Tenali_Ramakrishna,
} from "next/font/google";
import { deities } from "./deitiesData.";

const dance = Dancing_Script({
  subsets: ["latin"],
});

const kaush = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const Card = ({ deity, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${deity.bg} p-5 rounded-3xl flex gap-7 items-center ${
        index % 2 ? "sm:flex-row-reverse flex-col" : "sm:flex-row flex-col"
      } mb-5 `}
    >
      <img
        src={deity.image}
        className="h-48"
      />
      <div className="text-white">
        <h2
          className={`${dance.className} text-4xl mb-4 sm:text-left text-center`}
        >
          {deity.title}
        </h2>
        <p
          className={`${tenali.className} text-xl mb-0 text-justify`}
          style={{ lineHeight: "22px" }}
        >
          {deity.text}
        </p>
      </div>
    </motion.div>
  );
};

const Deities = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="p-12 px-5 bg-[#e1dfea]">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className={`${kaush.className} font-[900] text-center text-6xl pb-8 text-[#171056]`}
      >
        Our Deities
      </motion.h1>
      <div className="max-w-screen-lg m-auto">
        {deities.map((deity, i) => (
          <Card key={i} deity={deity} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Deities;
