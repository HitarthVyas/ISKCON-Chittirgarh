"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Permanent_Marker, Tenali_Ramakrishna } from "next/font/google";
import { schedule } from "./scheduleData";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const handlee = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const Schedule = () => {
  const controls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { ref: tableRef, inView: tableInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (titleInView) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [controls, titleInView]);

  return (
    <section
      className="py-10 pb-20 px-2 sm:px-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(23, 16, 86, 0.84) 0%, rgba(202, 11, 24, 0.58) 100%), url(https://t4.ftcdn.net/jpg/04/82/09/83/360_F_482098383_n6JMrdv1bBwHYXX27qQGalGJ97xa1eK2.jpg) center/cover",
      }}
    >
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0 }}
        animate={controls}
        className={`text-white text-center ${marker.className} text-6xl mb-5`}
      >
        Schedule
      </motion.h1>

      <motion.div
        ref={tableRef}
        initial={{ y: 50, opacity: 0 }}
        animate={tableInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-lg border border-white m-auto"
        style={{ overflow: "hidden" }}
      >
        {schedule.map((s, i) => (
          <div key={i} className="flex">
            <span
              className={`${handlee.className} mb-0 border border-white pt-2 p-0.5 w-5/12 text-white text-xl sm:text-3xl text-center`}
            >
              {s.title}
            </span>
            <span
              className={`${handlee.className} mb-0 border border-white pt-2 p-0.5 w-7/12 text-white text-xl sm:text-3xl text-center`}
            >
              {s.time}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Schedule;
