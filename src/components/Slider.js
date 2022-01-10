import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
max-width: 1400px;
    padding: 0 25px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 400px;
    background-color: #f4f4f4;
`
const Left = styled.div`
flex: 1;
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
display: flex;
align-items: center;
justify-content: flex-start;

`



const Slider = () => {
    return (
        <Component>
        <Left>
        <SmallLine />
        <BigLine />
        <h6 style={{FontFamily:"Roboto"}}>Type:Shoes</h6>
        <h1>Mens vintage leather shoes</h1>
        <h3>Price: Rs 3400/-</h3>
        </Left>
        <Right>
K xa
        </Right>
        </Component>
    )
}

export default Slider
