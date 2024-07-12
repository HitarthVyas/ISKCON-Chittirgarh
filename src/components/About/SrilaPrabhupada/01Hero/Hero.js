"use client";

import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section
      className="relative bg-cover"
      style={{
        backgroundImage:
          "url('https://www.iskconbangalore.org/blog/wp-content/uploads/2015/12/prabhupada-rathayatra.jpg')",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-36 2xl:h-48 bg-no-repeat bg-cover z-30"
        style={{ backgroundImage: "url('/Icons/About/wave.png')" }}
        aria-label="Wave background image"
      ></div>
      <div className=" bg-[black]/75 pb-48 px-7 pt-24">
        <div className="flex md:flex-row flex-col items-center justify-center h-full xl:gap-16 md:gap-7 gap-16 max-w-screen-xl m-auto">
          <motion.div
            className=" w-full sm:w-5/6 md:min-w-[325px] lg:min-w-[450px] h-96 bg-cover bg-top p-4"
            style={{
              backgroundImage:
                "url('https://www.forthepleasureoflordkrishna.com/wp-content/uploads/2019/07/Srila-Prabhupada-Vyasadeva.jpg')",
            }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="border-[#9eadc6] border-2 flex items-center justify-center h-full">
              <div className="h-20 w-20 border-[#9eadc6] rounded-full border-2 flex items-center justify-center">
                <Link
                  href={`https://youtu.be/qzsqUJTX8Ew?si=o_sYCXezADiPM56d`}
                  target="_blank"
                >
                  <img
                    src="/Icons/About/Prabhupada/play.svg"
                    className="h-16 hover:h-20 hover:w-20 transition-all duration-500"
                    alt="Play button"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
          <div className="lg:w-full sm:w-10/12 w-full">
            <motion.h1
              className={`${marker.className} mb-7 text-white text-5xl xl:text-7xl text-center md:text-left lg:text-left`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Srila Prabhupada
            </motion.h1>
            <div className="text-white text-base sm:text-lg text-justify">
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Śrīla Prabhupāda founded ISKCON in 1966 in New York City, driven
                by unwavering devotion to Lord Kṛṣṇa. Despite early challenges
                and a health setback in 1967, he tirelessly spread Kṛṣṇa
                consciousness, attracting followers worldwide through his
                charismatic leadership and teachings from the Bhagavad-gītā. His
                mission aimed to uplift humanity amidst the cultural turmoil of
                the 1960s, rather than simply converting followers.
              </motion.p>
              <motion.p
                className="xl:block hidden"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                Under Śrīla Prabhupāda&apos;s leadership, ISKCON grew rapidly
                worldwide by 1970, with him empowering the Governing Body
                Commission to oversee its expansion. Despite challenges,
                Prabhupāda&apos;s steadfast faith in Lord Kṛṣṇa and commitment
                to spreading devotional service established ISKCON as a powerful
                force for global spiritual transformation.
              </motion.p>
            </div>
            <motion.div
              className="flex md:block justify-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <button className="bg-[#ca0b18] mt-7 font-medium text-white text-xl px-8 py-1.5 hover:bg-white hover:text-[#ca0b18] duration-500 transition-all">
                Serve Prabhupada
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
