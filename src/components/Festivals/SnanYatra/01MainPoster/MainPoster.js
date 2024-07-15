"use client";
import React, { useState, useEffect } from "react";
import { Playfair_Display, Barlow } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

const images = [
  "/Festivels/snanyatra/snanyatrapic3.jpg",
  "/Festivels/snanyatra/jagannath-rath-yatra.jpg",
];

const zoomVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.1 },
};

const MainPoster = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
 
  return (
    <>
      {/* poster section  */}
      <div className="relative h-[80vh] w-full overflow-hidden mt-2"> 
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex} // Use the index as key to trigger AnimatePresence
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center mt-10"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={zoomVariants}
            transition={{ duration: 1.5 }} // Adjust duration for smooth transition
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center flex-col">
          <motion.h1
            className={`text-white text-5xl md:text-7xl text-center mt-20 ${bar.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }} 
          >
            Snan Yatra
          </motion.h1>
          <div style={{ marginTop: "20px" }}> 
            <motion.button
              onClick={() => handleScrollToPaymentSection()}
              style={{
                border: "2px solid yellow",
                background: "transparent",
                color: "white",
                padding: "10px 20px",
                fontSize: "24px",
                cursor: "pointer",
                borderRadius: "30px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "600",
              }}
              whileHover={{ scale: 1.1, backgroundColor: "#e82277" }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white"; // Reset text color when not hovered
              }}
            >
              Donate Now
            </motion.button>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/Festivels/rathyatra/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-149px]"></div>
    </>
  );
};

export default MainPoster;
