"use client";

import { MdCall, MdLocationOn } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Details = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const slideInVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Initial position outside the viewport
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
      className="py-20 px-2 sm:px-5"
    >
      <div className="max-w-screen-xl m-auto bg-[#3a47d5] p-3 sm:p-5 gap-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex gap-3 items-center w-[300px]">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <MdCall style={{ color: "#f40067", height: 40, width: 40 }} />
          </div>
          <div className="text-white">
            <h4 className="font-semibold">Call Us</h4>
            <p>7412879735</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[300px]">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <MdLocationOn style={{ color: "#e75e16", height: 40, width: 40 }} />
          </div>
          <div className="text-white">
            <h4 className="font-semibold">Visit Us</h4>
            <p className="text-xs">First floor, Union Bank Building, Rajeev </p>
            <p className="mt-0 text-xs">Colony, Meera Nagar, Chittorgarh</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[300px]">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <FaYoutube style={{ color: "#ff0000", height: 40, width: 40 }} />
          </div>
          <div className="text-white">
            <h4 className="font-semibold">Shrimad Bhagwatam</h4>
            <p>ISKCON Chittaurgarh</p>
            <p className="mt-0 text-xs">youtube.com/@iskconchittorgarh1656</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
