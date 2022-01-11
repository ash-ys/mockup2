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
        <SlideImage src="https://freepngimg.com/thumb/fashion/134876-bag-girl-shopping-excited-holding.png" />
      </div>
    </div>
  );
};

export default AutoSlider;