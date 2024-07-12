"use client";

import { festivals } from "./festivalData";
import { Trade_Winds } from "next/font/google";
import FestivalCard from "./FestivalCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const trade = Trade_Winds({
  subsets: ["latin"],
  weight: ["400"],
});

const Festival = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.8 });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-10 px-4 bg-[#171056]">
      <motion.h1
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={headingVariants}
        className={`text-white pb-7 text-center ${trade.className}`}
      >
        Upcoming Events
      </motion.h1>

      <div className="flex max-w-screen-xl justify-center m-auto flex-wrap gap-16 pb-20">
        {festivals.map((festival, index) => (
          <FestivalCard key={index} festival={festival} delay={index * 0.2} />
        ))}
      </div>

      <Link href='#donate'>
        <button
          className="bg-[#e75e16] hover:bg-white hover:text-black m-auto mt-2 text-[#ffffff] py-2 font-semibold px-4 text-xl rounded-full overflow-hidden flex items-center gap-1 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Donate Now
        </button>
      </Link>
    </section>
  );
};

export default Festival;
