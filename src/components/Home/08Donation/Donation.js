"use client"

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Kaushan_Script } from "next/font/google";
import { donates } from "./donateData"; // Assuming donate data is imported
import Link from "next/link";

const sriracha = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

// Card component
const Card = ({ donate, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true // Adjust threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1, // Delay based on index
        },
      });
    } else {
      controls.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className="w-64 shadow"
    >
      <img
        src="https://www.wholewhale.com/wp-content/uploads/2019/06/BANNER-1.png"
        className="h-44 object-cover"
        alt="Donation Banner"
      />
      <div className="bg-white border-t-2 border-[#ffaf2f]">
        <h5 className="p-2 pb-0 text-center">{donate.title}</h5>
        <Link className="p-2 hover:no-underline" href={donate.link}>
          <button className="bg-[#ca0b18] mt-2 font-medium text-[#ffffff] text-sm py-1 px-4 rounded-full overflow-hidden flex items-center gap-1 animate-bounce m-auto hover:animate-none">
            <span>Donate</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

// Donation component
const Donation = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true // Adjust threshold as needed (0 to 1)
  });

  return (
    <section className="py-10 bg-[#e1dfea]">
      <motion.h1
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${sriracha.className} text-center text-7xl mb-7 text-[#e75e16]`}
      >
        Donation
      </motion.h1>
      <div className="flex flex-wrap justify-center m-auto gap-x-10 gap-y-10 p-5">
        {donates.map((donate, index) => (
          <Card key={index} donate={donate} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Donation;
