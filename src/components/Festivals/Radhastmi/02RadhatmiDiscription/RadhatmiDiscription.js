"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Barlow } from "next/font/google";
import { useInView } from "react-intersection-observer";
import styles from "./RadhatmiDiscription.module.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const bar = Barlow({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RadhatmiDiscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [imageRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
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
        zIndex: 0
      }}
    >
      {/* This div uses class names from CSS module */} 
    </div>
    <h2
      className={`text-center pb-6 md:pb-16 md:px-24 ${playfair.className}`}
    >
      <span
        className={`text-[#ffffff] text-[28px] font-bold ${bar.className} tracking-widest`}
      >
        Radhashtami
      </span>
    </h2>
    <div className="flex justify-center">
      <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
        <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
          <motion.img
            ref={imageRef}
            src="/Festivels/radhasthmi/radhasthmi.jpg"
            className="max-h-[300px] rounded-xl border-gray-300 shadow-lg"
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
              Radha Ashtami is a sacred celebration within the ISKCON tradition, observed on the eighth day of the bright half of Bhadrapada. This festival honors Radha Rani, the beloved consort of Lord Krishna, and symbolizes the profound love and devotion that exists between the divine couple.
              </b>{" "}
              Devotees engage in fasting, meditation, and chanting, seeking the blessings of Radha Rani to deepen their spiritual connection. Temples, especially in holy places like Vrindavan and Mathura, resonate with vibrant decorations, devotional songs, and jubilant festivities.
            </p>
            <p className="mt-5">
            The celebration is enriched with cultural activities, including melodious bhajans and Rasa Lila performances that beautifully narrate the enchanting pastimes of Radha and Krishna. Community feasts foster unity and togetherness among devotees, embodying the spirit of sharing and love.{" "}
              <b>
                I.Radha Ashtami serves as a powerful reminder to cultivate love and devotion in our hearts, encouraging us to strengthen our bond with the divine. Jai Radhe Krishna!
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RadhatmiDiscription;
