"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { DynaPuff, Patrick_Hand } from "next/font/google";

const architect = DynaPuff({
  subsets: ["latin"],
  weight: ["400"],
});

const hand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const stepDuration = 70;

      const animateCounter = async () => {
        for (let i = 0; i <= 1000; i+=79) {
          setCounter(i);
          await new Promise((resolve) => setTimeout(resolve, stepDuration));
        }

        // Ensure the counter reaches the exact target number at the end
        setCounter(1000);
      };

      animateCounter();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="sm:w-1/2"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 2 }}
    >
      <h1 className={`${architect.className} text-center text-8xl text-[#00f]`}>
        {counter}+
      </h1>
      <h3 className={`${hand.className} text-center mb-5 text-[#00f]`}>
        Hours live on <span className="text-[#f00]">YouTube</span>
      </h3>
    </motion.div>
  );
};

export default Counter;
