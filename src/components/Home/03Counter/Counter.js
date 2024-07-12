"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ targetNumber, duration, text }) => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const stepDuration = (duration * 1000) / targetNumber;

      const animateCounter = async () => {
        for (let i = 0; i <= targetNumber; i++) {
          setCounter(i);
          await new Promise((resolve) => setTimeout(resolve, stepDuration));
        }

        // Ensure the counter reaches the exact target number at the end
        setCounter(targetNumber);
      };

      animateCounter();
    }
  }, [isInView, targetNumber, duration]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        ref={ref}
        className="flex gap-4 items-center flex-col sm:flex-row"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <span className="flex text-4xl font-bold text-[#d17a29]">
          <span className={targetNumber === 300 ? "w-[75px]" : "w-[45px]" }>{counter}</span>
          <span>{targetNumber === 76 && "+"}</span>
        </span>
        <span className="text-white">
          <p>{text.a}</p>
          <p>{text.b}</p>
        </span>
      </motion.div>
    </div>
  );
};

export default Counter;