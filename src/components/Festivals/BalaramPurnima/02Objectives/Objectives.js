"use client";

import { Playfair } from "next/font/google";
import { objectives } from "./objData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Objectives = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-14 px-0 sm:px-5">
      <div className="flex flex-wrap justify-evenly gap-10 m-auto max-w-screen-xl">
        {objectives.map((activity, i) => (
          <ObjCard key={i} activity={activity} i={i} handleScrollToPaymentSection={handleScrollToPaymentSection} />
        ))}
      </div>
    </div>
  );
};

const ObjCard = ({ activity, i, handleScrollToPaymentSection }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{
        y: inView ? 0 : 50,
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.8,
        rotate: inView ? 0 : -10,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: inView ? 0.1 * (i + 1) : 0,
      }}
      className="sm:min-w-72 sm:max-w-72 min-w-64 max-w-64 hover:scale-105 transition-all duration-500 bg-white rounded-lg shadow-lg"
    >
      <img
        className="rounded-t-lg object-cover h-64 w-full object-top"
        src={activity.image}
        alt={activity.title}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
          {activity.title}
        </h5>
        <p className="mb-2 text-xl font-medium tracking-tight text-center">
          {activity.topic}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
          {activity.price}
        </h5>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => handleScrollToPaymentSection()}
            className="px-4 py-2 mt-3 text-white bg-blue-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Donate Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Objectives;
