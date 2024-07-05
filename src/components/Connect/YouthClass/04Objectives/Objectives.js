"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Patrick_Hand } from "next/font/google";

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const points = [
  "Comprehensive support for addiction recovery with personalized therapy.",
  "Use available talent for the propagation of Vedic knowledge.",
  "Training the youth to develop character and competence.",
  "Presenting spiritual with scientific and logical basis with practical application.",
  "Developing the leadership quality and in the youth to excel in their life.",
];

const Point = ({ point, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      className="flex items-center gap-2 mb-5"
      key={i}
    >
      <img src="/Icons/Program/Youth/check.svg" className="h-6" />
      <p className="text-[#e1dfea] text-justify sm:text-lg">{point}</p>
    </motion.div>
  );
};

const Objectives = () => {
  return (
    <section className="bg-[#171056]">
      <div className="flex">
        <div className="hidden md:block w-1/2">
          <img
            src="/Images/Connect/Youth/mid.jpg"
            className="w-full h-[600px] object-cover hidden md:block"
          />
        </div>
        <div className="md:w-1/2 sm:p-10 p-20 sm:px-7 px-5 md:pr-14 m-auto">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${patrick.className} pb-12 text-[#ffc06e] text-6xl`}
          >
            Objectives
          </motion.h1>
          <div>
            {points.map((point, i) => (
              <Point point={point} i={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
