"use client";

import { motion } from "framer-motion";
import {
  Kaushan_Script,
  Patrick_Hand,
  Permanent_Marker,
  Tillana,
  Yatra_One,
} from "next/font/google";
import VerticalCounter from "./Counter";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const metal = Tillana({
  subsets: ["latin"],
  weight: ["400"],
});

const hand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const kushan = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  const [h3Ref, h3InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [imgRef, imgInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <>
      <section
        className="relative bg-cover bg-right h-screen w-full"
        style={{
          backgroundImage:
            "url('/Images/Program/sbbg.jpg')",
        }}
      >
        <div className="absolute w-full top-[20vh]">
          <motion.h1
            className={`${marker.className} text-center text-white p-5 text-5xl sm:text-6xl`}
            style={{
              textShadow:
                "0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Shrimad Bhagwatam
          </motion.h1>
          <motion.h3
            className={`${metal.className} mt-1 text-center sm:text-4xl text-white`}
            style={{
              textShadow: "0px 0px 5px black, 0px 0px 5px black",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Timing: 8:00 AM
          </motion.h3>
        </div>

        <div className="absolute bottom-[15vh] w-full flex justify-center">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="group flex transition-all duration-700 rounded-full hover:text-[#171056] text-white justify-center gap-2 hover:bg-[#e1dfea] bg-[#2e5697] px-4 py-2 items-center hover:px-6 hover:py-3 hover:shadow-xl"
          >
            <span className="text-xl font-semibold">Contact Us</span>
          </motion.button>
        </div>
      </section>
      <section className="bg-[#e1dfea] py-10 px-5">
        <div className="max-w-screen-lg m-auto flex items-center sm:flex-row flex-col">
          <div className="sm:w-1/2 mb-7">
            <motion.h3
              ref={h3Ref}
              className={`${hand.className} text-center mb-5 text-[#00f]`}
              initial={{ y: -50, opacity: 0 }}
              animate={h3InView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Every <span className="text-[#f00]">Morning</span> we are{" "}
              <span className="text-[#f00]">LIVE</span> on
            </motion.h3>
            <Link
              href={`https://www.youtube.com/channel/UCK1hkYsDBfgD9mHTQLlmfQA`}
              target="_blank"
            >
              <motion.img
                ref={imgRef}
                src="/Icons/youtube.svg"
                className="h-24 m-auto"
                initial={{ scale: 0, opacity: 0 }}
                animate={imgInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </div>
          <VerticalCounter />
        </div>
      </section>
      <section className="bg-[#171056] text-white text-center py-14 pt-16 px-5">
        <h2
          className={`font-medium ${kushan.className} text-4xl sm:text-5xl`}
          id="contact"
        >
          CONTACT US: 9772203474
        </h2>
      </section>
    </>
  );
};

export default Hero;
