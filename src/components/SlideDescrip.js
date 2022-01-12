import React from "react";

import styled from "styled-components";

const SlideDes = styled.div`
  flex: 2;
`;
const SmallLine = styled.div`
  border-top: 2px solid #7f7f7f;
  height: 10px;
  width: 40px;
`;

const BigLine = styled.div`
  border-top: 3px solid #000000;
height: 5px;
width:80px;
`;

const ViewButton = styled.button`
  background-color: #ff6600;
  padding: 15px 45px;
  border: none;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

const CartDiv = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
  }
`;

const AddToCart = styled.button`
  padding: 14px 45px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
`;
const H6 = styled.div`
    font-size: 14px;
    position: relative;
    font-weight: 400;

`
const H1 = styled.div`
font-weight: 500;
font-size: 25px;
margin: 0.4rem 0; 

`
const H3 = styled.div`
font-size: 18px;
    font-weight: 500;
    margin: 0.7rem 0 1rem;

`

const SlideDescrip = ({data}) => {
  return (
    <SlideDes>
      <SmallLine></SmallLine>
      <BigLine></BigLine>
      <H6>Type:{data.type}</H6>
      <H1 style={{ margin: "6px 0px", textTransform: "uppercase" }}>
        {data.name}
      </H1>
      <H3 style={{ margin: "12px 0px" }}>Rs. {data.price}</H3>
      <div>
        <ViewButton>View</ViewButton>
        <CartDiv>
          <AddToCart>Add to Cart</AddToCart>
        </CartDiv>
      </div>
    </SlideDes>
  );
};

export default SlideDescrip;