import React from 'react'
import styled from 'styled-components'

const Components = styled.div`
    max-width: 1400px;
    padding: 0 25px
px
;
    margin: 4rem auto 0;
`
const Title = styled.h1`
text-align: center;
    font-size: 60px;
    margin-bottom: 2rem;
    font-weight: 300;

`
const SpecialCards = styled.h1`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

`
const SpecialCardsImg = styled.img`
   background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    width: 100%;
    position: relative;
    overflow: hidden;
`

const Content = styled.div`
margin: 1rem 0;
`
const Ribbon = styled.div`
   position: absolute;
    right: -35px;
    top: -35px;
    height: 140px;
    width: 140px;
    overflow: hidden;
`
const Sale = styled.h1`
position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotate(
45deg
);
    background-color: #f60;
    color: #fff;
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`
const H4 = styled.h1`
font-size: 24px;
    font-weight: 300;
    cursor: pointer;
`
const Anim = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.2);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    opacity: 0;
    transition: .4s;
    cursor: pointer;
`
const SpecialOffers = () => {
    return (
        <Components>

            <Title>Special Offers<Anim /></Title>
            <SpecialCards>
            <Ribbon ><Sale>Sale</Sale></Ribbon>
            <div>
                <SpecialCardsImg src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2101/23617/210421_BT_AW0446_1__32566.1619667741.jpg?c=2"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2098/23618/210421_BT_AW0289__24486.1619667774.jpg?c=2"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://images.unsplash.com/photo-1549062573-edc78a53ffa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2114/23604/210421_BT_AW2143__38646.1619667025.jpg?c=2"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
                <div>
                <SpecialCardsImg src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"/>
                <Content><H4>Ruffle dress</H4><del style={{fontSize: "15px",textDecoration: "line-through",
    color: "rgba(0,0,0,.6)",margin: "1rem  0",fontWeight: "100"}}>Nrs: 2000/-</del> <h6 style={{fontSize: "20px",
    fontWeight: "100",color: "#f60"}}>Nrs: 1200/-</h6></Content>
                </div>
            </SpecialCards>
        </Components>
    )
}

export default SpecialOffers
