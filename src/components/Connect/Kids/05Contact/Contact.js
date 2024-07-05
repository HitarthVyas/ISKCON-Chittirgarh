"use client";

import { Kalam, Sriracha } from "next/font/google";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

const sriracha = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  const { ref: classDetailsRef, inView: classDetailsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const { ref: contactUsRef, inView: contactUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const controls = useAnimation();

  useEffect(() => {
    if (classDetailsInView) {
      controls.start("visible");
    }
  }, [controls, classDetailsInView]);

  useEffect(() => {
    if (contactUsInView) {
      controls.start("visible");
    }
  }, [controls, contactUsInView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-5 bg-[#e1dfea]">
      <div className="flex flex-col sm:flex-row gap-10 text-center">
        <motion.div
          ref={classDetailsRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="basis-1/2"
        >
          <h1 className={`${kalam.className} lg:text-6xl mb-2 text-[#ca0b18]`}>
            Class Details
          </h1>
          <div className={`${sriracha.className} text-[#2e5697]`}>
            <h5>Date: 22nd - 30th June 2024</h5>
            <h5>Age Group: 5 - 12 years</h5>
            <h5>Timings: 7:00 PM - 9:30 PM</h5>
            <h5>Fees: 500 Rs.</h5>
          </div>
        </motion.div>
        <motion.div
          ref={contactUsRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="basis-1/2"
        >
          <h1 className={`${kalam.className} lg:text-6xl mb-2 text-[#2e5697]`}>
            Contact Us
          </h1>
          <div className={`${sriracha.className} text-[#ca0b18]`}>
            <h4>+91 98194 13260</h4>
            <h4>+91 89057 16788</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
