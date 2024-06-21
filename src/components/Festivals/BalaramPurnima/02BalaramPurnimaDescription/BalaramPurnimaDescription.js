"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Barlow } from "next/font/google";
import { useInView } from "react-intersection-observer";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BalaramPurnimaDescription = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageRef, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 30% of the image is in view
  });

  // UseInView hook to detect when each paragraph is in view
  const [para1Ref, para1InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para2Ref, para2InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para3Ref, para3InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [para4Ref, para4InView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: -0 },
    zoom: { scale: [1, 1.1, 1] }, // Adding scale for zoom effect
  };

  const openModal = () => { 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`md:py-20 md:px-10 py-10 px-4 ${
        isModalOpen ? "backdrop-filter backdrop-blur-sm" : ""
      }`}
    >
      <h2 className={`text-center pb-6 md:pb-16 md:px-24 ${playfair.className}`}>
        <span className={`text-[#e82277] text-[30px] font-bold ${bar.className} tracking-widest`}>
          Snana Yatra Festival -
        </span>{" "}
        <span className={`text-[30px] text-[#2b2859] font-bold ${bar.className} tracking-widest`}>
          Auspicious Appearance of Lord Jagannath
        </span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
          <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <motion.img
              ref={imageRef} // Reference to the image element
              src="/Festivels/radhasthmi/radhasthmi.jpg"
              className="max-h-[400px] rounded-lg shadow-xl"
              initial={{ y: 100, opacity: 0 }} // Initial position (off-screen) and opacity
              animate={inView ? { y: 0, opacity: 1, scale: [1, 1.1, 1] } : {}} // Animation when in view
              transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
            />
            <div className={`text-gray-700 text-justify text-sm md:text-lg`}>
              <motion.p
                ref={para1Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para1InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
              >
                <b>
                  The Snana Yatra, also known as Dev Snana Purnima, is a sacred
                  bathing festival of deities observed on the Purnima (full
                  moon) day of the Hindu month of Jyeshtha.
                </b>{" "}
                According to Skanda Purana, this auspicious event commemorates
                the appearance of Lord Jagannath and holds significant
                importance for Vaishnavas. There are innumerable pastimes of the
                Lord Jagannath.
              </motion.p>
              <motion.p
                ref={para2Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para2InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
                className="mt-5"
              >
                Once upon a time in Dwarka, Mother Rohini was telling the queens
                of the Lord about the pastimes of the Lord with Radharani and
                other Gopis in Vrindavana. Hearing the pastimes narrated by
                Mother Rohini, Lord Krishna, Baladeva, and Subhadra became so
                delighted, overwhelmed with an emotional touch, and surprised
                that their eyes became wide, mouths remained open, and other
                parts became small and inserted inside their body.{" "}
                <b>
                  In this manner, Lord Krishna became Jagannath. When Devarshi
                  Narad took Darshan of this transcendental form, he requested
                  Lord to provide an opportunity to the whole world to have the
                  Darshan of this unique form.
                </b>
              </motion.p>
              <motion.p
                ref={para4Ref}
                initial={{ opacity: 0, y: -50 }}
                animate={para4InView ? { opacity: 1, y: -0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                variants={variants}
                className="mt-5 text-[#2b2859] text-[24px] cursor-pointer relative"
                onClick={openModal}
              >
                <strong className="hover:text-green-700">Read More</strong>
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#2b2859] transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg max-w-lg w-full relative"
            style={{ boxShadow: "29px 29px 60px 0px rgba(0, 0, 0, 0.4)" }}
          >
            <motion.button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={closeModal}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            <h3 className="text-xl font-semibold mb-4">
              More About Snan Yatra
            </h3>
            <p className="text-justify">
              After a certain period, King Indradyumna fulfilled this desire of
              Devarshi Narad. Then, Lord, after coming in the dream of King
              Indradyumna, says- ‘Hey King, I tend to appear on the Purnima
              particular date of the Jyeshtha month. So, on that day after
              consecration, I performed my worship with a full heart. From then,
              King Indradyumna from that day inaugurated the Snana Yatra
              festival. In Jagannath Puri, many festivals are celebrated for
              Lord Jagannath, and the beginning of all these festivals
              originates from the Snana Yatra.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BalaramPurnimaDescription;
