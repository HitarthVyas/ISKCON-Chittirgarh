"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tenali_Ramakrishna, Tillana } from "next/font/google";
import { chittorActivities } from "./activitiesData";

const tillana = Tillana({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const Card = ({ activity, index }) => {
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
      className="min-w-60 max-w-60"
    >
      <img
        src={activity.image}
        className="min-w-60 max-w-60 h-44 object-cover object-top rounded-2xl hover:scale-105 duration-500 transition-all"
      />
      <h3 className={`${tenali.className} text-3xl text-white text-center pt-2`}>
        {activity.title}
      </h3>
    </motion.div>
  );
};

const Activities = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="p-12 px-5 bg-[#171056]">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`${tillana.className} text-[#e1dfea] text-center font-semibold mb-8`}
      >
        Let&apos;s Get Together
      </motion.h1>
      <div className="flex flex-wrap gap-10 max-w-screen-lg m-auto justify-center">
        {chittorActivities.map((activity, i) => (
          <Card key={i} activity={activity} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
