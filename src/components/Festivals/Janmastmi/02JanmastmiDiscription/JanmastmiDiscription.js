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

const JanmastmiDiscription = () => {
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
          zIndex: 0,
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
          Krishna Janmashtami
        </span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
          <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <motion.img
              ref={imageRef}
              src="/Festivels/janmasthmi/img8.jpg"
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
              className="text-[#121210] text-justify text-sm md:text-[14px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
            >
              <p className="mt-5">
                <b>
                  Janmashtami is a vibrant celebration at ISKCON temples, where
                  devotees come together to honor the appearance of Lord Krishna
                  with deep devotion. Festivities last throughout the day,
                  featuring special activities, games for children, and
                  beautifully adorned Deities.
                </b>{" "}
                prasadam is prepared and offered as bhoga before being shared
                among devotees. Fasting helps purify minds and hearts,
                culminating in a midnight celebration that marks Krishna&apos;s
                birth.
              </p>
              <p className="mt-5">
                Devotees engage in kirtans, perform aartis, and read from the
                Srimad Bhagavatam to strengthen their spiritual connection.
                Special attractions include the midnight abhishek, cultural
                programs, and lively processions..{" "}
                <b>
                  The atmosphere is filled with love and devotion, inspiring
                  everyone to embrace Krishna consciousness through joyful
                  participation in the festivities.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanmastmiDiscription;
