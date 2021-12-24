import React from 'react'
import  styled  from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
flex: 1;
margin: 3px;
height: 60vh;
position: relative;
`
const Image = styled.img`
width: 50%;
height: 50%;
object-fit: cover;
 ${mobile({ height: "20vh" })}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 60%;
height: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`

`
const Button = styled.button`
border: none;
padding: 10px;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;

`

const CategoryItem = ({item}) => {
 return (
  <Container>
   <Image src={item.img}/>
   <Info/>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
  </Container>
 )
}

export default CategoryItem
