import React from "react";
import SlideDescrip from "./SlideDescrip";
import SlideImage from "./SlideImage";

const AutoSlider = () => {
  return (
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
        <SlideDescrip
          type="Shoes"
          itemName="Men Vintage Leather Ankle Boot"
          price="3400"
        />
        <SlideImage src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
    </div>
  );
};

export default AutoSlider;