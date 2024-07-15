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
          <span
          className={`text-[#e82277] text-[28px] font-bold ${bar.className} tracking-widest`}
        >
          Rath Yatra 2K24
        </span>
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
              <img src="/Festivels/rathyatra/IMG1.jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG6.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG7.jpg" alt="Nature 3" />
            </SwiperSlide>
            {/* Additional slides if needed */}
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG8.jpg" alt="Nature 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG5.jpg" alt="Nature 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG2.jpg" alt="Nature 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG3.jpg" alt="Nature 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Festivels/rathyatra/IMG4.jpg" alt="Nature 8" />
            </SwiperSlide>
          </StyledSwiper>
        </div>
      );
}

export default SerialCarousel