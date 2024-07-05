"use client";

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Dancing_Script, Yatra_One } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const yatra = Yatra_One({ subsets: ["latin"], weight: ["400"] });

const Card = ({ title, backgroundImage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sm:w-1/2 relative aspect-[4/3] bg-cover bg-center rounded-3xl border-2 border-white overflow-hidden hover:shadow-xl"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        cursor: 'pointer' // Optional: Add pointer cursor on hover
      }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-white absolute bottom-0 lg:text-2xl sm:text-[1.75rem] text-xl ${yatra.className} text-center p-2 bg-black/50 w-full`}
        style={{
          textShadow: "0px 0px 15px black, 0px 0px 15px black",
          lineHeight: "2rem",
        }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

const Darshan = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="p-10 pt-0 bg-[#171056] -mt-[1px]">
      <motion.h1
      ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-white text-7xl font-extrabold mb-10 ${dancing.className}`}
      >
        Darshan
      </motion.h1>
      <div className="max-w-screen-xl flex flex-col sm:flex-row gap-10 m-auto">
        <Card
          title="Festival Darshan"
          backgroundImage="https://i.pinimg.com/originals/8b/18/e8/8b18e8829c25601f64b81745bbf40223.jpg"
        />
        <Card
          title="Regular Darshan"
          backgroundImage="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/image/jagannath-dham-yatra1.webp"
        />
      </div>
    </section>
  );
};

export default Darshan;
