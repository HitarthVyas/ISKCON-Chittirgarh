"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Courgette, Indie_Flower } from "next/font/google";
import { youthActivities } from "./activitiesData";

const tillana = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const kotta = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

const ActivityCard = ({ activity, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative h-40 min-w-36 bg-cover rounded-2xl bg-center"
      style={{
        clipPath: "polygon(70% 0, 100% 30%, 100% 100%, 0 100%, 0 0)",
        backgroundImage:
          `url(${activity.image})`,
      }}
    >
      <div className="absolute bottom-3 w-full">
        <h5 className="p-2 bottom-3 m-auto w-11/12 text-white bg-black/60 rounded-2xl font-medium">
          {activity.title}
        </h5>
      </div>
    </motion.div>
  );
};

const Activities = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="p-12 px-5 text-center">
      <div ref={headerRef}>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`font-[500] mb-2 text-[#2e5697] ${tillana.className}`}
        >
          What{" "}
          <span className="decoration-solid decoration-2 underline underline-offset-8 decoration-[#ffaf2f]">
            We
          </span>{" "}
          Do
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`text-[#e75e16] mb-10 ${kotta.className}`}
        >
          A Glimpse Of Our Youth Classes
        </motion.h1>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center xl:max-w-screen-x max-w-screen-md m-auto">
        {youthActivities.map((activity, i) => (
          <ActivityCard activity={activity} i={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
