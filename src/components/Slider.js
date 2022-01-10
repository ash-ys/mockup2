import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
max-width: 1400px;
    padding: 0 25px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
const H6 = styled.div`
    font-size: 14px;
    position: relative;
    font-weight: 400;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;

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

const Slider = () => {
    return (
        <Component>
        <Left>
        <SmallLine />
        <BigLine />
        <H6>Type:Shoes</H6>
        <H1>Mens vintage leather shoes</H1>
        <H3>Price: Rs 3400/-</H3>
        </Left>
        <Right>
K xa
        </Right>
        </Component>
    )
}

export default Slider
