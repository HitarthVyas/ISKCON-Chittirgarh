"use client";

import { motion } from "framer-motion";
import {
  Indie_Flower,
  Sriracha,
  Tenali_Ramakrishna,
} from "next/font/google";
import { useInView } from "react-intersection-observer";
import { grihasthaBenefits } from "./benefitData";

const tillana = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const agda = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const kotta = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const Benefit = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="p-20 pb-10 px-7 bg-[#e1dfea]">
      <div className="text-center">
        <motion.h3
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`font-[500] mb-2 text-[#2e5697] ${tillana.className}`}
        >
          <span className="decoration-solid decoration-2 underline underline-offset-8 decoration-[#ffaf2f]">
            Benefits
          </span>{" "}
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-[#e75e16] mb-10 ${kotta.className}`}
        >
          Why Enroll in Grihastha Classes?
        </motion.h1>
        <div className="flex flex-wrap gap-8 lg:gap-16 max-w-screen-lg m-auto justify-center">
          {grihasthaBenefits.map((grihastha, i) => (
            <BenefitCard key={i} index={i} grihastha={grihastha} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ index, grihastha }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`w-56 rounded-2xl bg-[#${index % 2 === 1 ? 'e75e16' : 'ca0b18'}] p-4`}
    >
      <img
        src={grihastha.icon}
        className="h-16 mb-4"
        alt={grihastha.description}
      />
      <motion.p
        className={`text-white mb-0 text-2xl ${agda.className}`}
        style={{ lineHeight: "25px" }}
      >
        {grihastha.description}
      </motion.p>
    </motion.div>
  );
};

export default Benefit;
