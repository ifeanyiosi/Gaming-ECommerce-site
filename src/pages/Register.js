import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.howtogeek.com/wp-content/uploads/2021/07/shutterstock_1151254004-2.jpg?height=200p&trim=2,2,2,2")
      center;
     display:flex;
     align-items: center;
     justify-content: center;


`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
 ${mobile({ width: "75%" })}



`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;



`
const Form = styled.form`
 display: flex;
 flex-wrap: wrap;



`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;


`
const Agreement = styled.span`
font-size: 10px;
margin: 20px 0px;


`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #303030;
color: white;
cursor: pointer;


`

const Register = () => {
 return (
  <Container>
   <Wrapper>
    <Title>
     CREATE AN ACCOUNT
    </Title>
    <Form>
     <Input placeholder="first name"/>
     <Input placeholder="last name"/>
     <Input placeholder="username"/>
     <Input placeholder="email"/>
     <Input placeholder="password"/>
     <Input placeholder="confirm password"/>
     <Agreement>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore pariatur libero unde, doloremque facilis hic esse. Maxime?
     </Agreement>
     <Button>CREATE</Button>

    </Form>
   </Wrapper>
  </Container>
 )
}

export default Register
