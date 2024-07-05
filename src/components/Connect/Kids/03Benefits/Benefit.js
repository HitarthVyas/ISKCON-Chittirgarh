"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { kidBenefits } from "./benefitsData";

const Card = ({ benefit, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    if (inView) {
      console.log(`Card ${index + 1} is in view`);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }} // Adjust delay timing as needed
      className="w-16"
    >
      <div
        className={`bg-[${benefit.color}] rounded-full w-16 h-16 flex items-center mb-1 justify-center`}
      >
        <img src={benefit.icons} className="h-12" />
      </div>
      <h5 className="w-16 text-center">{benefit.topic}</h5>
    </motion.div>
  );
};

const Benefit = () => {
  return (
    <section className="bg-[#e1dfea] flex flex-col sm:flex-row gap-5">
      <div
        className=" relative basis-1/2 flex justify-end h-96 px-5 sm:rounded-r-3xl p-14"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790_1280.jpg')",
        }}
      >
        <div className=" absolute inset-0 bg-black/70 sm:rounded-r-3xl"></div>
        <h2 className={`sm:w-3/6 text-white relative my-auto text-center sm:text-right`}>
          How Will Our Classes Benefit Your Child?
        </h2>
      </div>
      <div className="py-7 grid sm:grid-cols-3 grid-cols-2 basis-1/2 gap-3 place-items-center">
        {kidBenefits.map((benefit, i) => (
          <Card key={i} benefit={benefit} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Benefit;
