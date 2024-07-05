"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Kalam, Tillana } from "next/font/google";
import { connects } from "./connectData"; // Assuming connect data is imported
import Link from "next/link";

const dance = Kalam({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

const tillana = Tillana({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Card component
const ConnectCard = ({ connect, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.2, // Delay based on index
        },
      });
    } else {
      controls.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div ref={ref} initial={{ x: -100, opacity: 0 }} animate={controls}>
      <img
        src={connect.image}
        className="w-72 h-52 object-cover object-top rounded-2xl border-2"
        alt="Connect Image"
      />
      <h3
        className={`${tillana.className} w-72 my-2 font-medium text-[#e1dfea] text-center`}
      >
        {connect.title}
      </h3>
      <Link href={connect.link} className="hover:no-underline">
        <button className="font-medium bg-white text-[#e75e16] hover:scale-105 hover:bg-[#e75e16] hover:text-white transition-all duration-300 border-2 border-[#e75e16] text-sm py-1 px-4 rounded-full flex items-center gap-1 m-auto">
          <span>Connect</span>
        </button>
      </Link>
    </motion.div>
  );
};

// Connect component
const Connect = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <section className="py-12 px-10 bg-[#171056]">
      <motion.h1
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
        animate={controls}
        className={`text-white text-center text-7xl font-medium mb-5 ${dance.className}`}
      >
        Connect
      </motion.h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {connects.map((connect, index) => (
          <ConnectCard key={index} connect={connect} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Connect;
