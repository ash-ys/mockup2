import React,{ useState }from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slide.css";
import SlideDescrip from "./SlideDescrip";
import SlideImage from "./SlideImage";
import DATA from './SliderData.js'

const Slide = () => {
const [slideproduct, setSlideProduct] = useState(DATA)

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
      {slideproduct.map((datas)=>{
        return(
        <SwiperSlide  tag="li">
      <div
      className="autoSlider"
      style={{
        margin: "90px 70px",
      }}
    >
      <div
        style={{
          margin: "0px 80px",
          display: "flex ",
        }}
      >
        <SlideDescrip key={datas} data= {datas} />
        <SlideImage key= {datas} data= {datas} />
      </div>
    </div>
      </SwiperSlide>)
      })}
      </Swiper>
    </React.Fragment>
  );
};

export default Slide;