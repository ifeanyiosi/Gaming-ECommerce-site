import { Link } from '@material-ui/core';
import { Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
display: flex;
background-color: #393E46;
 ${mobile({ FlexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
color: white;

`;

const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0;


`;
const SocialContainer = styled.div`
display: flex;


`;
const SocialIcon = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
color: white;
 ${mobile({ display: "none" })}
`

const Title = styled.h3`
margin-bottom: 30px;


`

const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`

const Right = styled.div`
flex: 1;
color: white;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`

const Payment = styled.img`
width:50%;

`

const Footer = () => {
 return (
  <Container>
   <Left>
    <Logo>BATTLETIDE.</Logo>
    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae cumque harum doloribus corrupti itaque. Perferendis iste nemo corrupti aut ea cumque inventore, animi aspernatur sed, placeat nisi beatae est.</Desc>
  
   <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
         </Left>
   <Center>
    <Title>Important Links</Title>
    <List>
     <ListItem>Home</ListItem>
     <ListItem>Cart</ListItem>
     <ListItem>Playstation</ListItem>
     <ListItem>Xbox</ListItem>
     <ListItem>Nitendo</ListItem>
     <ListItem>Accessories</ListItem>
     <ListItem>My Account</ListItem>
     <ListItem>Track Order</ListItem>
     <ListItem>Wishlist</ListItem>
     <ListItem>Terms</ListItem>
    </List>
    
   </Center>
   <Right>
     <Title> Contact</Title>
      <ContactItem><Room style={{marginRight:"10px"}}/> 1938 Sullivan Place, Metropolice</ContactItem>
      <ContactItem><Phone style={{marginRight:"10px"}}/> 08000000000</ContactItem>
      <ContactItem><Link style={{marginRight:"10px"}}/> https://github.com/ifeanyiosi</ContactItem>

    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
   </Right>
  </Container>
 )
}

export default Footer
