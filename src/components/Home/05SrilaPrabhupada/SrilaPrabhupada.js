"use client";

import {
  Kaushan_Script,
  Metal,
  Parisienne,
  Quintessential,
  Sriracha,
  Tillana,
  Yatra_One,
} from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const metal = Metal({
  subsets: ["latin"],
  weight: ["400"],
});

const kaushan = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const quint = Tillana({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SrilaPrabhupada = () => {
  const [imageRefLg, imageInViewLg] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [imageRefSm, imageInViewSm] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-[#171056] sm:px-5 md:px-10 lg:px-0 py-10 flex justify-end items-center gap-5">
      <motion.img
        src="https://www.krishnapath.org/ext/art/sp/compress/sp-d2.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="w-96 rounded-3xl hidden lg:block"
        ref={imageRefLg}
        initial={{ y: -100, opacity: 0 }}
        animate={imageInViewLg ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div className="bg-white py-10 lg:py-20 lg:w-2/3 px-5 md:px-10">
        <motion.h5
          ref={textRef}
          initial={{ x: -100, opacity: 0 }}
          animate={textInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`lg:ml-2 text-center text-sm ${quint.className}`}
        >
          FOUNDER ACHARYA OF ISKCON | HIS DIVINE GRACE
        </motion.h5>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={textInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className={`${kaushan.className} md:text-6xl text-4xl font-extrabold text-black lg:mt-5 mt-2 text-center mb-7`}
        >
          SRILA PRABHUPADA
        </motion.h1>
        <motion.img
          src="https://www.krishnapath.org/ext/art/sp/compress/sp-d2.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="lg:w-96 rounded-3xl lg:hidden object-cover mx-auto h-96 sm:w-4/5 md:w-3/5 object-top"
          ref={imageRefSm}
          initial={{ y: -100, opacity: 0 }}
          animate={imageInViewSm ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="flex m-auto mt-6 sm:mt-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5L15 12L8 19"
              stroke="#2e5697"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={`text-[#2e5697] text-xl ${metal.className}`}>
          &quot;Prthivite ache yata nagaradi-grama, sarvatra pracara haibe mora
            (Krishna) nama&quot;
          </p>
        </div>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={textInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className="mt-5 sm:mt-10 text-justify sm:text-base hidden sm:block"
        >
          Śrīla Prabhupāda, driven by unwavering devotion to Lord Kṛṣṇa, founded
          ISKCON in 1966 in New York City. Despite early challenges and a health
          setback in 1967, he tirelessly spread Kṛṣṇa consciousness, attracting
          followers worldwide through his charismatic leadership and teachings
          from the Bhagavad-gītā. His mission aimed not just at religious
          conversion but at uplifting humanity during the cultural
          turmoil of the 1960s.
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={textInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          className="text-justify mt-4 text-base hidden sm:block"
        >
          Under Śrīla Prabhupāda&apos;s leadership, ISKCON grew rapidly worldwide by
          1970, with him empowering the Governing Body Commission to oversee its
          expansion. Despite challenges, Prabhupāda&apos;s steadfast faith in Lord
          Kṛṣṇa and commitment to spreading devotional service established
          ISKCON as a powerful force for global spiritual transformation.
        </motion.p>

        <Link href={'/srila-prabhupada'} className="hover:no-underline">
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            className="flex items-center gap-1 text-[#2e5697] mt-8 sm:mt-14 border-2 py-2 px-4 rounded-xl border-[#2e5697] hover:bg-[#2e5697] hover:text-white transition-all duration-500 lg:mx-0 mx-auto"
          >
            <span className="font-bold text-xl">Know More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L15 12L8 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default SrilaPrabhupada;
