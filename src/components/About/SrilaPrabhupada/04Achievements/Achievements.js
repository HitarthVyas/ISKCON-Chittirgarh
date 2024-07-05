"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Kanit, Kaushan_Script, Patrick_Hand, Playfair_Display } from "next/font/google";
import { achieveData } from "./achieveData";

const kush = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
})

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Achievements = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="py-16 text-gray-700 relative bg-gradient-to-r from-[#606c88] to-[#3f4c6b]">
      <motion.h1
        ref={headerRef}
        initial={{ y: -50, opacity: 0 }}
        animate={headerInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className={`${kush.className} text-center pb-10 px-4 text-[#ffffff]`}
      >
        Srila<span className="text-[#ffc06e]"> Prabhupada&apos;s</span>{" "}
        Priceless Gift to the World
      </motion.h1>
      <div className={`${kanit.className} grid grid-cols-2 gap-y-5 md:grid-cols-4 place-items-center`}>
        {achieveData.map((achieve, index) => (
          <AchievementCard key={index} index={index} achieve={achieve} />
        ))}
      </div>
    </div>
  );
};

const AchievementCard = ({ index, achieve }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: inView ? 0.1 * (index + 1) : 0 }}
      className={`w-[150px] xl:w-[180px] text-center p-1 bg-white/10 rounded-lg h-[150px] sm:h-40 flex justify-center flex-col`}
    >
      <p className="text-base xl:text-lg text-[#e1dfea]">{achieve.pre}</p>
      <h2 style={{ color: achieve.color }}>{achieve.title}</h2>
      <p className="text-base mb-0 xl:text-lg text-[#e1dfea] mt-1">{achieve.post}</p>
    </motion.div>
  );
};

export default Achievements;
