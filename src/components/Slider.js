import React from 'react'
import styled from 'styled-components'


const Component = styled.div`
max-width: 1400px;
    padding: 0 25px;
    margin: 80px 40px;
    display: flex;
    grid-template-columns: 1fr 1fr;
`
const Left = styled.div`
flex: 2;
padding:35px;
display: flex;
align-items: center;
display: inline-block;

`
const SmallLine = styled.div`
border-top: 2px solid #7f7f7f;
height: 5px;
width:40px;

`
const BigLine = styled.div`
border-top: 3px solid #000000;
height: 5px;
width:80px;

`
const Right = styled.div`
flex: 1;
padding:35px;
display: flex;
align-items: center;
display: inline-block;
align-content: center;

`
const SliderImg = styled.div`
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
    background-color: rgba(255,102,0,.2);
}
&::after {
    content: "";
    position: absolute;
    bottom: -13px;
    right: -13px;
    height: 100%;
    width: 100%;
    background-color: rgba(255,102,0,.6);
}
    
`

const ImageSl = styled.img`
    position: relative;
    background-position: 50%;
    background-size: cover;
    bottom: 47px;
    right: 40px;
    background-repeat: no-repeat;

    width: 130%;
    height: 130%;
    z-index: 1;
`
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
const CustomButton = styled.button`
    text-align: center;
    background-color: #f60;
    margin-right: 2rem;
    padding: 15px 45px;
    border:none;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #ff6600;
`



const CustomBtn = styled.div`
    display: inline-block;
    position: relative;
    padding: 3px 1px;
    cursor: pointer;
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
`
const AddToCart = styled.button`
padding: 14px 45px;
border: none;
font-size:16px;
background-color:white;
text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    position: relative;

`




const Slider = () => {
    return (
        <Component>
        <Left>
        <SmallLine />
        <BigLine />
        <H6>Type:Shoes</H6>
        <H1>Mens vintage leather shoes</H1>
        <H3>Price: Rs 3400/-</H3>
        <div>
        <CustomButton >view</CustomButton>
        <CustomBtn >
        <AddToCart>add to cart</AddToCart>
        </CustomBtn>
        </div>
        </Left>
        <Right>
        <SliderImg ><ImageSl src={"	https://freepngimg.com/thumb/fashion/134876-bag-girl-shopping-excited-holding.png"} /></SliderImg>
        </Right>
        </Component>
    )
}

export default Slider
