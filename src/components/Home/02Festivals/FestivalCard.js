import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const FestivalCard = ({ festival, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: delay + 0.3 },
    },
  };

  return (
    <div className="w-80 relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
        className="border w-80 border-gray-500 rounded-xl hover:shadow-xl overflow-hidden"
      >
        <img
          className="w-80 h-64 object-cover object-center rounded-xl hover:scale-105 transition-transform duration-1000"
          src={festival.image}
          alt={festival.title}
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        style={{ boxShadow: "0px 0px 35px 0px #444444" }}
        className={`w-72 absolute -bottom-10 left-4 hover:scale-105 text-white bg-gradient-to-br to-[#ffaf2f] from-black transition-all duration-700 m-auto rounded`}
      >
        <div className="flex items-center justify-between gap-2 px-1">
          <h4>{festival.title}</h4>
          <p className="font-medium">{festival.date}</p>
        </div>
        <Link href={festival.link} className="flex hover:no-underline justify-center mb-3">
          <button className="bg-[#2e5697] mt-2 font-medium text-[#ffffff] text-sm py-1 px-2 rounded-full overflow-hidden flex items-center gap-1 transition-all duration-300 ease-in-out transform hover:scale-110">
            <span>Explore</span>
            <span
              className={`inline-block transition-transform duration-300 ease-in-out transform translate-x-0 opacity-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default FestivalCard;
