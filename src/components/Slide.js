import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slide.css";
import AutoSlider from './AutoSlider'

const Slide = () => {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <AutoSlider />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="swipe"
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: false }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
};

export default Slide;