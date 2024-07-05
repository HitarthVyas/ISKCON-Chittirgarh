"use client";

import { Metal, Quintessential, Tenali_Ramakrishna } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const quint = Metal({
  subsets: ["latin"],
  weight: ["400"],
});

const Details = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.8 });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section
      className="bg-fixed bg-cover bg-bottom"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2021/05/24/11/56/lake-6278825_640.jpg')",
      }}
    >
      <div className="bg-black/65 sm:p-5 p-2">
        <div className="border border-gray-400 text-white m-auto sm:p-5 p-2 lg:w-10/12 max-w-screen-2xl lg:px-10 sm:text-2xl text-xl text-justify">
          <div className="w-[95%] m-auto" style={{ lineHeight: "27px" }}>
            <motion.p
              ref={ref1}
              variants={fadeIn}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              className={`${tenali.className}`}
            >
              Abhay Charan Bhaktivedanta Swami Srila Prabhupada, born on
              September 1, 1896, in British-ruled India, initially joined
              Mahatma Gandhi&apos;s civil non-cooperation movement. His life took a
              significant turn in 1922 when he met Srila Bhaktisiddhanta
              Saraswati Thakur, a respected religious leader and scholar. Srila
              Bhaktisiddhanta encouraged him to bring the teachings of Lord
              Krishna to the West. Prabhupada became his follower in 1933 and
              dedicated 32 years preparing for this mission.
            </motion.p>
            <motion.p
              ref={ref2}
              variants={fadeIn}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className={`${tenali.className} mt-5`}
            >
              At 69, Prabhupada embarked on a journey to New York City with just
              40 rupees, a trunk of books, and a few personal belongings aboard
              the cargo ship Jalduta. The voyage was perilous, causing him to
              suffer two heart attacks. After 35 days, he arrived at a desolate
              Brooklyn port.
            </motion.p>
            <motion.p
              ref={ref3}
              variants={fadeIn}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              className={`${tenali.className} mt-5`}
            >
              In New York, Prabhupada faced severe hardships, often lacking
              money and a stable place to live. He began his mission modestly,
              teaching Bhagavad-gita classes in Bowery lofts and leading kirtans
              in Tompkins Square Park. His message resonated with the hippie
              community and the younger generation, leading some to become
              serious students of Bhakti-yoga. With their help, he rented land
              and officially registered the International Society for Krishna
              Consciousness (ISKCON) on July 11, 1966.
            </motion.p>
            <motion.p
              ref={ref4}
              variants={fadeIn}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              className={`${tenali.className} mt-5`}
            >
              Over the next 11 years, Prabhupada traveled the globe 14 times,
              spreading Krishna&apos;s teachings across six continents and attracting
              followers from diverse backgrounds. Under his guidance, ISKCON
              established numerous centers and projects worldwide, including
              rural communities, temples, educational institutes, and the
              largest vegetarian food relief program. Returning to India, he
              opened several temples, including major centers in Mayapur and
              Vrindavana.
            </motion.p>
            <motion.p
              ref={ref5}
              variants={fadeIn}
              initial="hidden"
              animate={inView5 ? "visible" : "hidden"}
              className={`${tenali.className} mt-5`}
            >
              Prabhupada&apos;s most significant contribution is his extensive
              literary work, authoring over 70 volumes on Krishna tradition. His
              writings, noted for their depth, clarity, and adherence to
              tradition, are highly regarded by scholars and used as textbooks
              in colleges. His notable works include &quot;Bhagavad Gita As It Is,&quot;
              the 30-volume &quot;Srimad Bhagavatam,&quot; and the 17-volume &quot;Sri
              Chaitanya Charitamrita,&quot; all translated into 76 languages.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
