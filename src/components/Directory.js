import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
background-color: #f6f6f6;
    display: flex;
    height: 700px;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
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
    margin: 11px 7.5px 15px;
    overflow: hidden;
`
const Image = styled.img`
width: 100%;
    height: 100%;
    background-position: 50%;
    background-size: cover;
    overflow: hidden;
    &:hover {
        transform: scale(1.5);
        transition: transform 3s;
        cursor: pointer;
    }
`
const Directory = () => {
    return (
        <Container>
            <Item ><Image src="https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/></Item>
            <Item ><Image src="https://images.unsplash.com/photo-1581343600721-f4ea1318ec57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=957&q=80"/></Item>
            <Item ><Image src="https://images.pexels.com/photos/1706910/pexels-photo-1706910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></Item>
            <Item ><Image src="https://i.ibb.co/GCCdy8t/womens.png"/></Item>
            <Item ><Image src="https://i.ibb.co/R70vBrQ/men.png"/></Item>
        </Container>
    )
}

export default Directory
