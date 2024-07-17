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

const DiscriptionSection = () => {
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
          className={`text-[#e82277] text-[28px] font-bold ${bar.className} tracking-widest`}
        >
          Snan Yatra
        </span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
          <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <motion.img
              ref={imageRef}
              src="/Festivels/snanyatra/img2.jpeg"
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
                  Snana Yatra, or Dev Snana Purnima, is a significant Vaishnava
                  festival celebrated on the full moon day of the Hindu month of
                  Jyeshtha. It commemorates the appearance of Lord Jagannath.
                </b>{" "}
                Devotees believe that visiting Lord Jagannath on this day
                cleanses them of all sins. On the eve of Snana Yatra, Lord
                Jagannath, Balabhadra, and Subhadra are brought out in a grand
                procession to the Snana Bedi (bathing platform). The next day,
                the deities are bathed with 108 pots of purified water,
                accompanied by religious chants. In the evening, Jagannath and
                Balabhadra don elephant headgear, representing Ganesh, in a form
                called Gajavesha
              </p>
              <p className="mt-5">
                After the bathing ceremony, the deities are believed to fall ill
                and are kept in seclusion for recuperation under the care of the
                Raj Vaidya (King&apos;s physician) during the Anasara period, which
                lasts about 15 days.{" "}
                <b>
                  During this time, the deities are not visible to devotees, who
                  instead view pata chitra paintings.
                </b>
              </p>
              <p className="mt-5">
              Many devotees visit the Alarnatha Mandira in Bramhagiri, believing
              that Lord Jagannath manifests as Alarnatha during this period.
              Following their recovery, the deities reappear for public viewing
              in a ceremony called &apos;Netrotsava&apos; or &apos;Nava Yauvanotsava&apos;,
              signifying the rejuvenated and youthful Lord Jagannath.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscriptionSection;
