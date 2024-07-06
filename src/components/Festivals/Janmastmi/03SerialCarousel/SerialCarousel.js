import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components"; // Correct import
import { Barlow } from "next/font/google";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: black; /* Color for non-active dots */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #e82277; /* Color for active dot */
  }
`;

const SerialCarousel = () => {
    return (
        <div className="mb-20">
          <div className="text-center text-[32px] text-[#e82277] font-bold">
            <h1 className={`${bar.className} tracking-widest`}>Krishna Janmashtami 2k23</h1>
          </div>
          <StyledSwiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img10.JPG" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img2.JPG" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img3.JPG" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img4.JPG" alt="Nature 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img6.JPG" alt="Nature 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/janmasthmi/img9.JPG" alt="Nature 7" />
            </SwiperSlide>
          </StyledSwiper>
        </div>
      );
}

export default SerialCarousel