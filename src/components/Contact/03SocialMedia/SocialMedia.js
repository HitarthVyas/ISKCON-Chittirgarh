"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Playfair } from "next/font/google";
import Link from "next/link";

const playfair = Playfair({
  subsets: ["latin"],
});

const SocialMedia = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleControls = useAnimation();
  const iconsControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
    if (iconsInView) {
      iconsControls.start("visible");
    }
  }, [titleControls, titleInView, iconsControls, iconsInView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="py-20 px-4">
      <motion.h2
        ref={titleRef}
        className={`text-center pb-4 ${playfair.className} font-bold text-5xl sm:text-6xl`}
        initial="hidden"
        animate={titleControls}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        Follow Us On
      </motion.h2>
      <motion.div
        ref={iconsRef}
        className="flex justify-center items-center gap-4 md:gap-20"
        initial="hidden"
        animate={iconsControls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Delay between each icon
            },
          },
        }}
      >
        <Link href="https://www.instagram.com/iskcon_chittorgarh/?igsh=MXBjajl5eG9vN2Rqaw%3D%3D" target="_blank">
          <motion.div variants={iconVariants} transition={{ duration: 0.5 }}>
            <motion.img
              src="/Icons/Media/instagram.svg"
              className="h-10 sm:h-12 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </Link>
        <Link href="https://www.youtube.com/@iskcon_jaipur" target="_blank">
          <motion.div variants={iconVariants} transition={{ duration: 0.5 }}>
            <motion.img
              src="/Icons/Media/youtube.svg"
              className="h-10 sm:h-12 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </Link>
        <Link href="https://wa.me/9649689649" target="_blank">
          <motion.div variants={iconVariants} transition={{ duration: 0.5 }}>
            <motion.img
              src="/Icons/Media/whatsapp.svg"
              className="h-14 sm:h-16 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialMedia;