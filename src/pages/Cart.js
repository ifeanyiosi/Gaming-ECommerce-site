import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcemnet from '../components/Announcemnet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div`




`
const Wrapper = styled.div`
padding: 20px;

`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`


const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`



const Buttom = styled.div`
display: flex;
justify-content:space-between;

`
const Info = styled.div`
flex:3;

`
const Summary = styled.div`
flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`

const ProductAmtContainer = styled.div`
display: flex;
align-items: center;
margin-bpttom: 20px;

`
const ProductAmt = styled.div`
font-size: 24px;
margin: 5px;

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;


`



const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Hr = styled.hr`
background-color:black;
border: none;
height: 1px;


`

const SummaryTitle = styled.h1`
font-weight: 200;


`
const SummaryItem = styled.div`
 margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};


`
const SummaryItmPrice = styled.span`


`
const SummaryItmTxt = styled.span`



`
const SummaryButton = styled.button`
 width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;



`


const Cart = () => {
 return (
  <Container>
   <Navbar/>
   <Announcemnet/>
  
   <Wrapper>
    <Title>
     YOUR BAG
    </Title>
    <Top>
     <TopButton>CONTINUE SHOPPING</TopButton>
     <TopTexts>
      <TopText>
       Shopping Bag (5)
      </TopText>
       <TopText>
       Wishlist
      </TopText>
     </TopTexts>
     <TopButton type= "filled" >CHECKOUT</TopButton>
    </Top>
    <Buttom>
     <Info>
      <Product>

      <ProductDetail>
       <Image src = "https://www.androidcentral.com/sites/androidcentral.com/files/styles/medium/public/article_images/2018/08/ps4-pro-render.jpg"/>
       <Details>
        <ProductName> <b>Product</b>   Playstation 4 Pro</ProductName>
        <ProductName> <b>ID:</b>  75951562</ProductName>
       </Details>
      </ProductDetail>
      <PriceDetail>
       <ProductAmtContainer>
        <Add/>
        <ProductAmt>2</ProductAmt>
        <Remove/>
       </ProductAmtContainer>
       <ProductPrice>₦ 95,000</ProductPrice>
      </PriceDetail>
      </Product>
      <Product>
      <Hr/>
      <ProductDetail>
       <Image src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-prime-day-deals-nintendo-switch-1562596166.jpg?crop=1.00xw:0.502xh;0,0.237xh&resize=1200:*"/>
       <Details>
        <ProductName> <b>Product</b>   Nitendo Switch</ProductName>
        <ProductName> <b>ID:</b>  5655252</ProductName>
       </Details>
      </ProductDetail>
      <PriceDetail>
       <ProductAmtContainer>
        <Add/>
        <ProductAmt>2</ProductAmt>
        <Remove/>
       </ProductAmtContainer>
       <ProductPrice>₦ 140,000</ProductPrice>
      </PriceDetail>
      </Product>
     </Info>
     <Summary>
      <SummaryTitle>
       ORDER SUMMARY
      </SummaryTitle>
      <SummaryItem>
       <SummaryItmTxt>Subtotal</SummaryItmTxt>
       <SummaryItmPrice>₦ 470,000</SummaryItmPrice>
      </SummaryItem>
      <SummaryItem>
       <SummaryItmTxt>Shipping</SummaryItmTxt>
       <SummaryItmPrice>₦ 2,500</SummaryItmPrice>
      </SummaryItem>
      <SummaryItem  type="total" >
       <SummaryItmTxt>Total</SummaryItmTxt>
       <SummaryItmPrice>₦ 472,500</SummaryItmPrice>
      </SummaryItem>
      <SummaryButton>CHECK OUT NOW</SummaryButton>
     </Summary>
    </Buttom>
   </Wrapper>
   <Footer/>
  </Container>
 )
}

export default Cart
