"use client";

import { motion } from "framer-motion";
import { Patrick_Hand, Yatra_One } from "next/font/google";
import { useInView } from 'react-intersection-observer';
import { youthOffers } from "./offerData";

const color = [
  "border-[#f40067]",
  "border-[#ffc06e]",
  "border-[#ca0b18]",
  "border-[#5fa800]",
  "border-[#2e5697]",
  "border-[#e75e16]",
];

const bg = [
  "hover:bg-[#f40067]",
  "hover:bg-[#ffc06e]",
  "hover:bg-[#ca0b18]",
  "hover:bg-[#5fa800]",
  "hover:bg-[#2e5697]",
  "hover:bg-[#e75e16]",
];

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const hand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const OfferCard = ({ offer, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      className={`sm:p-4 p-1 shadow-md border-t-4 ${color[i]} ${bg[i]} sm:w-40 w-36 rounded-lg h-[154px] transition-all duration-300`}
      key={i}
    >
      <img src={offer.image} className="h-10 mb-5 mx-auto" />
      <h4 className={`${hand.className} text-black hover:text-white text-center`}>
        {offer.topic}
      </h4>
    </motion.div>
  );
};

const Offer = () => {
  return (
    <section className="p-10 px-5 bg-[#e1dfea]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${yatra.className} text-[#3c3e63] text-center pb-7`}
      >
        What <span className="decoration-[#ffaf2f] underline underline-offset-8">We</span> Offer
      </motion.h1>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 justify-center place-items-center xl:max-w-screen-md max-w-screen-md m-auto">
        {youthOffers.map((offer, i) => (
          <OfferCard offer={offer} i={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Offer;
