import React from "react";
import styled from "styled-components";

const ImgBg = styled.div`
  flex: 1;
  align-self: center;
  height: 200px;
  width: 300px;
  position: relative;

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
  background-size: cover;
  width: 100%;
  height: 100%;
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
