"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Courgette, Indie_Flower, Timmana } from "next/font/google";

const tillana = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

const agda = Timmana({
  subsets: ["latin"],
  weight: ["400"],
});

const kotta = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

const stagesRoles = [
  "Planning to get married",
  "Just married",
  "Already married",
  "Needing guidance",
  "Parents",
  // "Gṛhastha counsellors",
  "Aspiring vānaprasthas",
];

const Button = ({ role, index }) => {
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.button
      ref={buttonRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="font-medium hover:bg-white hover:text-[#e75e16] hover:scale-105 bg-[#e75e16] text-white transition-all duration-300 border-2 border-[#e75e16] text-base py-1 px-4 rounded-full flex items-center gap-1 m-auto"
    >
      <span>{role}</span>
    </motion.button>
  );
};

const Contact = () => {
  return (
    <section className="p-20 pb-10 px-7 bg-[#171056]">
      <div className=" text-center">
        <h3 className={`font-[500] mb-2 text-white ${tillana.className}`}>
          <span className="decoration-solid decoration-2 underline underline-offset-8 decoration-[#ffaf2f]">
            Contact Us
          </span>{" "}
        </h3>
        <h1
          className={`text-[#e75e16] mb-6 ${kotta.className}`}
        >
          Who Can Take This Course
        </h1>

        <div className=" flex flex-wrap gap-5 max-w-screen-lg justify-center m-auto">
          {stagesRoles.map((role, i) => (
            <Button key={i} role={role} index={i} />
          ))}
        </div>
        <div className="flex gap-5 justify-center items-center mt-10">
          <div className="p-2 bg-white rounded-full">
            <img src="/Icons/contact.svg" className="h-8" alt="contact icon" />
          </div>
          <h2 className="text-white font-normal">7412879735</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
