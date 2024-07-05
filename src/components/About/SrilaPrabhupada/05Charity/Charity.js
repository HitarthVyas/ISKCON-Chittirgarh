"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Metal, Tenali_Ramakrishna, Yatra_One } from "next/font/google";
import { donates } from "@/components/Home/08Donation/donateData";

const sriracha = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const quint = Metal({
  subsets: ["latin"],
  weight: ["400"],
});

// Card component
const Card = ({ donate, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Adjust threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1, // Delay based on index
        },
      });
    } else {
      controls.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className="w-64 shadow"
    >
      <img
        src="https://www.wholewhale.com/wp-content/uploads/2019/06/BANNER-1.png"
        className="h-44 object-cover"
        alt="Donation Banner"
      />
      <div className="bg-white border-t-2 border-[#ffaf2f]">
        <h5 className="p-2 pb-0 text-center">{donate.title}</h5>
        <div className="p-2 h-12">
          <button className="bg-[#ca0b18] m-auto font-medium text-[#ffffff] text-sm py-1 px-4 rounded-full overflow-hidden flex items-center gap-1 hover:text-[#ca0b18] hover:bg-white hover:border-[#ca0b18] hover:border transition-all duration-500">
            <span>Donate</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Donation component
const Charity = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Adjust threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  const textControls = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (textInView) {
      textControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [textControls, textInView]);

  const quoteControls = useAnimation();
  const [quoteRef, quoteInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (quoteInView) {
      quoteControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [quoteControls, quoteInView]);

  return (
    <section className="py-16 bg-[#e1dfea]">
      <motion.h1
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={controls}
        className={`${sriracha.className} text-center sm:text-6xl mb-4 sm:mb-7`}
      >
        Serve <span className="text-[#e75e16]">Srila</span> Prabhupada
      </motion.h1>

      <div>
        <motion.div
          ref={textRef}
          initial={{ y: 50, opacity: 0 }}
          animate={textControls}
          className="text-black m-auto xl:pt-5 pb-8 md:w-11/12 max-w-screen-2xl lg:px-24 md:px-10 px-5 sm:text-3xl text-2xl text-justify"
        >
          <div className="flex w-[95%] m-auto">
            <img
              src="/Icons/Program/quote.svg"
              className="sm:block hidden h-8 mr-2 -mt-4"
            />
            <p className={`${tenali.className}`} style={{ lineHeight: "27px" }}>
              What the devotee actually offers to the Lord is not needed by the
              Lord. He is self-sufficient. If the devotee offers something to
              the Lord, it acts for his own interest because whatever a devotee
              offers to the Lord comes back in a quantity a million times
              greater than what was offered. One does not become a loser by
              giving to the Lord, but he becomes a gainer by millions of times.
            </p>
          </div>
          <motion.h4
            ref={quoteRef}
            initial={{ x: -50, opacity: 0 }}
            animate={quoteControls}
            className={`text-black text-right ${quint.className}`}
          >
            ~ Srila Prabhupada (Krishna Book, Chapter 81)
          </motion.h4>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center m-auto gap-x-10 gap-y-10 p-5">
        {donates.map((donate, index) => (
          <Card key={index} donate={donate} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Charity;
