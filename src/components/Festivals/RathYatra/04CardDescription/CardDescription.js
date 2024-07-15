// CardDescription.js
import React from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CardDescription.module.css"; // Assuming you have a CSS module for styling
import cardsData from "./CardData.json";
import ChoiceDonation from "../05ChoiceDonation/ChoiceDonation";
import { Playfair_Display, Caveat, Barlow } from "next/font/google";
import SerialCarousel from "../06SerialCarousel/SerialCarousel";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CardDescription = () => {
  return (
    <div
    >
      <div>
        <div className="mx-3 text-center p-2">
        <span
          className={`text-[#e82277] text-[28px] font-bold ${bar.className} tracking-widest`}
        >
          Donation Seva
        </span>
        </div>
        <div className={`flex justify-center px-10 py-20`}>
          <div className={`flex flex-wrap justify-center gap-10`}>
            {cardsData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
        <ChoiceDonation />
        <SerialCarousel />
        <div className="w-full" id="paymentSection"></div>
        <div className="mx-[60px] max-sm:mx-[2px] flex flex-col pb-20">
          <PaymentSection />
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`max-w-sm border rounded-lg overflow-hidden ${styles.card}`}
      style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0.4)" }}
      initial={{ x: -270, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 1.3, ease: "easeOut" }} // Adjusted duration for faster scale on hover
    >
      <img className="w-full" src={card.imageSrc} alt={card.title} />
      <div className="p-4">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹ {card.price}
          </span>
          <button
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            onClick={() => handleScrollToPaymentSection()}
          >
            Donate
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardDescription;
