import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Barlow } from "next/font/google";
import { useInView } from "react-intersection-observer";
import styles from "./RathYatra.module.css"; // Adjust path as per your project structure

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AboutRathYatra = () => {
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
    <>
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
            Rath Yatra
          </span>
        </h2>
        <div className="flex justify-center">
          <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
            <div className="flex xl:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
              <motion.img
                ref={imageRef}
                src="/Festivels/rathyatra/img12.jpg"
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
                  The Jagannath Ratha Yatra is a globally renowned festival celebrated in Puri, Odisha. During this festival, Lord Jagannath, his elder brother Balabhadra, and sister Subhadra are taken from the Srimandira temple to the Gundicha temple on grand chariots
                  </b>{" "}
                  Thousands of devotees pull the chariots&apos; ropes, reminiscent of Krishna and Balarama&apos;s journey from Kurukshetra to Vrindavan. The festival begins with great fanfare, and the King of Puri sweeps the chariots as a mark of respect. The chariots, each adorned with distinct symbols and colors, travel through a wide, decorated street, making the deities accessible to all.
                </p>
                <p className="mt-5">
                At the Gundicha temple, the deities enjoy a relaxed routine, symbolizing a "Vrindavan-like" retreat. Key rituals include the Hera Panchami when Goddess Lakshmi visits to bring Lord Jagannath back. The return journey, marked by the deities&apos; reconciliation, is celebrated with equal grandeur.{" "}
                  <b>
                  This event reflects deep spiritual traditions and the intimate relationship between the Lord and his devotees. The legend of Jagannath&apos;s origin, involving Indradyumna Maharaj and the mystical appearance of the deities, adds to the festival&apos;s sacredness, making it a profound experience for participants.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default AboutRathYatra;
