import React from 'react'
import styled from 'styled-components'
import Announcemnet from '../components/Announcemnet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../Responsive'

const Container = styled.div``
const Title = styled.h1`
margin: 20px;


`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
 ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column" })}
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right:20px;
 ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
padding: 10px;
margin-right:20px;
 ${mobile({ margin: "10px 0px" })}

`
const Option = styled.option``

const ProductList = () => {
 return (
  <Container>
    <Navbar/>
    <Announcemnet/>
    <Title>Main Platforms</Title>
    <FilterContainer>
     <Filter>
<FilterText>Filter Products</FilterText>
    <Select>
    <Option disabled selected>
      General
    </Option>
    <Option>Games</Option>
    <Option>Accessories</Option>
    <Option>Nitendo</Option>
    <Option>Playstation</Option>
    <Option>Microsoft</Option>
    <Option>Hand-Held</Option>

   </Select>
   
     </Filter>
     <Filter>
<FilterText>Sort Products</FilterText>
<Select>
    <Option disabled selected>
      Popularity
    </Option>
    <Option>Newest Arrivals</Option>
    <Option>Price: Low to High</Option>
    <Option>Price: Hight to Low</Option>
    <Option>Product Rating</Option>
    
   </Select>
     </Filter>
    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
  </Container>
 )
}

export default ProductList
