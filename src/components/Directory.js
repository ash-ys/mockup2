import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
background-color: #f6f6f6;
    display: flex;
    height: 700px;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1400px;
    padding: 10px 0;
    margin: 1rem auto 0;
`
const Item = styled.div`
background-color: yellowgreen;
    min-width: 30%;
    height: 300px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;
`
const Image = styled.img`
width: 100%;
    height: 100%;
    background-position: 50%;
    background-size: cover;
    overflow: hidden
`
const Directory = () => {
    return (
        <Container>
            <Item ><Image src="https://freepngimg.com/thumb/fashion/134876-bag-girl-shopping-excited-holding.png"/></Item>
            <Item />
            <Item />
        </Container>
    )
}

export default Directory
