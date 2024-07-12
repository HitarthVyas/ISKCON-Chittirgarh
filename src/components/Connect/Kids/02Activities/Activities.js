"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Kalam } from "next/font/google";
import { kidActivities } from "./activitiesData";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

const ActivityCard = ({ activity, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    // You can perform additional actions when inView changes
    console.log("In view:", inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="w-72 flex flex-col items-center"
    >
      <div className="w-64 h-64 rounded-[40%]" style={{ boxShadow: "0px -1px 4px 0px black" }}>
        <img
          src={activity.image}
          className="w-64 h-64 object-cover object-top rounded-[40%]"
        />
      </div>
      <motion.h5
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className={`bg-[${activity.color}] text-white w-56 text-center py-1.5 -mt-7 rounded-full`}
      >
        {activity.topic}
      </motion.h5>
    </motion.div>
  );
};

const Activities = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="p-20 px-5 bg-[#e1dfea]">
      <motion.h1
        ref={headerRef}
        initial={{ y: -50, opacity: 0 }}
        animate={headerInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`${kalam.className} text-center text-[#2e5697] lg:text-7xl mb-14`}
      >
        Our Value{" "}
        <span className="decoration-[#e75e16] underline">Education</span>{" "}
        Features
      </motion.h1>

      <div className="flex justify-center max-w-screen-lg flex-wrap m-auto gap-10">
        {kidActivities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
