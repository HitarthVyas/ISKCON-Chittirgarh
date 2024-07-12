"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Yatra_One } from "next/font/google";
import Details from "@/components/Contact/01Details/Details";
import SocialMedia from "@/components/Contact/03SocialMedia/SocialMedia";
import { useInView } from "react-intersection-observer";

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    if (headingInView) {
      // Implement any animation or state change logic here
    }
  }, [headingInView]);

  useEffect(() => {
    if (mapInView) {
      // Implement any animation or state change logic here
    }
  }, [mapInView]);

  const fadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main>
      <section
        className="bg-cover pt-48 pb-32 bg-gradient-to-b from-[#00d2ff] to-[#3a47d5]"
        style={{
          textShadow:
            "0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black, 0px 0px 5px black",
        }}
      >
        <motion.h1
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className={`${yatra.className} text-white w-full text-center text-6xl sm:text-8xl`}
        >
          Contact Us
        </motion.h1>
      </section>

      <Details />

      <motion.iframe
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.222388532305!2d74.62318807482752!3d24.89039484406009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a1876dee7caf%3A0x3f7b1475b3bab158!2sISKCON%20Center%20Chittorgarh!5e0!3m2!1sen!2sin!4v1719992291919!5m2!1sen!2sin"
        height="450"
        className="border-0 w-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></motion.iframe>

      <SocialMedia />
    </main>
  );
};

export default Page;
