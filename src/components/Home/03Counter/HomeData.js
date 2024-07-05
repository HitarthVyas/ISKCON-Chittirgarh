"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

const text = [
  {
    a: "CRORE MEALS SERVED",
    b: "AROUND THE WORLD",
  },
  {
    a: "CRORE MEALS SERVED",
    b: "IN COVID 19 LOCKDOWN",
  },
  {
    a: "YEARS OF SERVICE",
    b: "TO HUMANITY",
  },
];

const HomeData = () => {
  const duration = 1.71; // The total duration you want for all counters to complete
  // const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <div
      className="bg-opacity-0 flex justify-center bg-white bg-fixed bg-cover bg-center"
      ref={ref}
      style={{
        backgroundImage:
          "url('https://static.punjabkesari.in/multimedia/12_00_193586106jagannath-3.jpg')",
      }}
    >
      <div className="bg-black/80 mt-[-1px] lg:p-14 w-full m-auto">
        <motion.div
          className="flex 2xl:justify-evenly flex-col lg:flex-row justify-between items-center p-4 m-5 max-w-screen-lg mx-auto gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Counter targetNumber={550} text={text[0]} duration={duration} />
          <Counter targetNumber={76} text={text[1]} duration={duration} />
          <Counter targetNumber={56} text={text[2]} duration={duration} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeData;
