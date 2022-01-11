import React from "react";
import styled from "styled-components";

const ImgBg = styled.div`
  position: relative;
    width: 300px;
    height: 200px;
    

  &::before {
    content: "";
    position: absolute;
    top: -13px;
    left: -13px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 102, 0, 0.2);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -13px;
    right: -13px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 102, 0, 0.6);
  }
`;

const SliderImg = styled.img`
  position: relative;
    background-position: 50%;
    background-size: cover;
    bottom: 47px;
    right: 40px;
    background-repeat: no-repeat;

    width: 130%;
    height: 130%;
    z-index: 1;
`;

const SlideImage = (props) => {
  return (
    <ImgBg>
      <SliderImg src={props.src} />
    </ImgBg>
  );
};

export default SlideImage;
