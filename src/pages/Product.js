import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcemnet from '../components/Announcemnet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../Responsive'


const Container = styled.div`


`
const Wrapper = styled.div`
padding: 50px;
display: flex;
 ${mobile({ padding: "10px", flexDirection: "column" })}

`
const ImgContainer = styled.div`
flex:1;

`
const Image = styled.img`
object-fit: cover;
 ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
flex:1;
padding: 120px 100px;
 ${mobile({ padding: "10px" })}

`
const Title = styled.h1`
font-weight: 500;

`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
font-weight: 100;
font-size: 40px;

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;


`
const AmmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;


`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
mergin: 0px 5px;

`
const Button = styled.button`
padding: 15px;
border: 2px solid black;
background-color: white;
cursor: pointer;
font-weight:500;
font-size: 8px;


&:hover{
 background-color: grey;

}


`


const Product = () => {
 return (
  <Container>
   <Navbar/>
   <Announcemnet/>
   <Wrapper>
    <ImgContainer>
     <Image src="https://pyxis.nymag.com/v1/imgs/5ed/68b/5266b418f39fbe080b14889c67a89235af-playstation-5.rsquare.w700.jpg"/>
    </ImgContainer>
    <InfoContainer>
      <Title>Playstation 5</Title>
      <Desc>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et temporibus excepturi vero ullam asperiores veritatis dignissimos similique necessitatibus voluptas architecto dolorem, vitae qui consequatur provident incidunt neque quasi, praesentium dolores.
      </Desc>
      <Price> ₦350,000 </Price>

      <AddContainer>
       <AmmountContainer>
        <Remove/>
        <Amount>1</Amount>
        <Add/>
       </AmmountContainer>
       <Button>ADD TO CARD</Button>
      </AddContainer>
    </InfoContainer>
   </Wrapper>
   <Newsletter/>
   <Footer/>
  </Container>
 )
}

export default Product
