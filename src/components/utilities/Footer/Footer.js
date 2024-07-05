"use client";
import Marquee from "react-fast-marquee";
import { Merriweather_Sans } from "next/font/google";
import Link from "next/link";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "ISKCON Jaipur", href: "/iskcon-jaipur" },
  { name: "Srila Prabhupada", href: "/srila-prabhupada" },
  { name: "Guest House", href: "/guest-house" },
  { name: "Govinda's", href: "/govindas" },
  { name: "Vrindavan Haat", href: "/vrindavan-haat" },
  { name: "Contact Us", href: "/contact" },
];

const donateLinks = [
  { name: "Food for Needy", href: "/food-for-life" },
  { name: "Online Puja", href: "/puja-seva" },
  { name: "Sadhu Seva", href: "/sadhu-seva" },
  { name: "Nitya Seva", href: "/nitya-seva" },
  { name: "Gau Seva", href: "/gau-seva" },
  { name: "Explore More", href: "/explore-more" },
];

const socialMediaIcons = [
  {
    src: "/Icons/Media/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/iskcon_chittorgarh/?igsh=MXBjajl5eG9vN2Rqaw%3D%3D",
  },
  {
    src: "/Icons/Media/youtube.svg",
    alt: "YouTube",
    href: "https://www.youtube.com/@iskconchittorgarh1656",
  },
  {
    src: "/Icons/Media/whatsapp.svg",
    alt: "WhatsApp",
    href: "https://wa.me/9649689649",
  },
];

const FooterPage = () => {
  return (
    <>
      <div className="bottom-0 bg-gradient-to-bl to-[#2e5697] from-black flex flex-col pb-10 pt-5">
        <div className="py-4 overflow-x-hidden">
          <Marquee
            className={`mb-0 text-3xl text-[#ffffff] whitespace-no-wrap tracking-wide ${merri.className}`}
          >
            <span style={{ textShadow: "0em 0em 0.3em #9eadc" }}>
              Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare
              Rama Rama Rama Hare Hare.
            </span>
            <span className="ml-16"></span>
          </Marquee>
        </div>

        <div className="flex flex-col min-[721px]:flex-row mx-5 p-4">
          <div className="basis-1/2">
            <p
              className={`text-center md:text-left text-5xl ${merri.className} mb-0 text-[#ffffff] font-bold max-[721px]:pl-0 pl-20`}
              style={{ textShadow: "0em 0em 0.3em #9eadc6" }}
            >
              Get in touch
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <button
              className={`bg-[#e1dfea] font-medium text-xl text-[#3c3e63] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merri.className} hover:scale-105 transition-transform`}
            >
              Donate Now
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="mx-5 sm:mx-12 grid grid-cols-1 xl:grid-cols-3 gap-2">
            <div className="col-span-full xl:col-span-1">
              <div className="p-2 sm:p-5 flex flex-col justify-center items-center">
                <div className={`text-white mb-2 ${merri.className}`}>
                  <h4>Contact Us</h4>
                </div>
                <div className={`text-white text-center ${merri.className}`}>
                  <h6>We’re available (10 AM – 6 PM)</h6>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <span
                      className={`text-[16px] text-white font-bold ${merri.className}`}
                    >
                      Mobile:-
                      <span
                        className={`font-bold text-white ${merri.className}`}
                      >
                        +91 96496 89649
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex p-4 space-x-5">
                    {socialMediaIcons.map((icon, index) => (
                      <a
                        key={index}
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          className="cursor-pointer w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                >
                  Office
                </h3>
                <div className="p-5 pt-2 text-white mb-4">
                  <span className="text-start block md:text-center max-w-80 m-auto">
                    First floor, Union Bank Building, Rajeev Colony, Meera
                    Nagar, Chittorgarh, 312001 - Rajasthan (India)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-full xl:col-span-2">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Quick Links
                      </h3>
                      <ul
                        role="list"
                        className="mt-3 space-y-4 pl-0 flex flex-col items-center justify-center"
                      >
                        {quickLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className={`text-sm leading-3 text-[#ffc06e] hover:text-[#e1dfea] ${merri.className}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold leading-6 text-white flex items-center justify-center ${merri.className}`}
                      >
                        Donate
                      </h3>
                      <ul
                        role="list"
                        className="mt-3 space-y-4 pl-0 flex flex-col items-center justify-center"
                      >
                        {donateLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className={`text-sm leading-3 text-[#ffc06e] hover:text-[#e1dfea] ${merri.className}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
