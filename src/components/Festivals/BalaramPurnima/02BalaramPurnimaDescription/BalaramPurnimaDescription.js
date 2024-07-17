"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Barlow } from "next/font/google";
import { useInView } from "react-intersection-observer";
import styles from "../../Radhastmi/02RadhatmiDiscription/RadhatmiDiscription.module.css";

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
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
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
      } relative`}
    >
      <div
        className={`mt-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] ${styles["background-image"]}`}
        style={{
          backgroundImage: "url('/Festivels/rathyatra/Mandala_BR.png')",
          zIndex : 0 
        }}
      >
        {/* This div uses class names from CSS module */} 
      </div>
      <h2
        className={`text-center pb-6 md:pb-16 md:px-24 ${playfair.className}`}
      >
        <span
          className={`text-[#e82277] text-[28px] font-bold ${bar.className} tracking-widest`}
        >
          Balaram Purnima
        </span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
          <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <motion.img
              ref={imageRef}
              src="/Festivels/BalaramPurnima/new1.png"
              className="max-h-[300px]  rounded-xl border-gray-300 shadow-lg"
                style={{
                  zIndex: 10,
                  boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0.4)",
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <div
              className="text-gray-700 text-justify text-sm md:text-[14px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
            >
              <p className="mt-5">
                <b>
                Balarama Jayanti, or Balarama Appearance Day, is celebrated on the full moon day of Shravana (August/September), marking the auspicious appearance of Lord Balarama, the elder brother of Lord Krishna.
                </b>{" "}
                This year, it falls on August 31. ISKCON temples are beautifully decorated, and devotees gather to celebrate this special day. Lord Balarama, known as Haldhar, represents strength and devotion, and his deep connection to Krishna is significant for devotees.
              </p>
              <p className="mt-5">
              The festivities honor Balarama&apos;s divine pastimes, including his victories over demons like Dhenukasura and Pralambasura. As the original Guru Tattva, he embodies spiritual authority and loyalty. Devotees pray for Balarama’s blessings, seeking strength to serve Lord Krishna with full devotion.{" "}
                <b>
                Balarama Jayanti is a cherished occasion to deepen our connection with these divine personalities and celebrate their eternal bond.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalaramPurnimaDescription;
