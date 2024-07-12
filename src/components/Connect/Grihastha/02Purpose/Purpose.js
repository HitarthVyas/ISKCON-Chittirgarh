"use client";

import { motion } from "framer-motion";
import {
  Agdasima,
  Bree_Serif,
  Courgette,
  DM_Serif_Display,
  DynaPuff,
  Iceland,
  Indie_Flower,
  Itim,
  Kotta_One,
  Tillana,
  Timmana,
} from "next/font/google";
import { purpose } from "./purposeData";
import { useInView } from "react-intersection-observer";

const tillanaFont = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const agdaFont = Timmana({
  subsets: ["latin"],
  weight: ["400"],
});

const kottaFont = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

const Purpose = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="p-20 pb-10 px-7 bg-[#e1dfe]">
      <div className="text-center">
        <motion.h3
          ref={headerRef}
          initial={{ y: -50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={`font-[500] mb-2 text-[#2e5697] ${tillanaFont.className}`}
        >
          What{" "}
          <span className="decoration-solid decoration-2 underline underline-offset-8 decoration-[#ffaf2f]">
            We
          </span>{" "}
          Do
        </motion.h3>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={`text-[#e75e16] mb-10 ${kottaFont.className}`}
        >
          Explore Our Grihastha Classes
        </motion.h1>
        <div className="flex flex-wrap gap-8 lg:gap-x-16 max-w-screen-lg m-auto justify-center">
          {purpose.map((p, i) => (
            <Card key={i} index={i} topic={p.topic} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ index, topic, image }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={cardInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="text-center"
    >
      <div className="p-2 rounded-full w-[210px] h-[210px] border-dotted border-2 border-[#9eadc6]">
        <img
          src={image}
          className="w-48 h-48 object-cover rounded-full"
          alt={topic}
        />
      </div>
      <motion.h3
        className={`w-[210px] mt-2 text-[#3c3e63] font-semibold ${agdaFont.className}`}
      >
        {topic}
      </motion.h3>
    </motion.div>
  );
};

export default Purpose;
