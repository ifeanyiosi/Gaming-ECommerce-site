import React from 'react'
import Announcemnet from '../components/Announcemnet'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
 return (
  <div>
   <Announcemnet/>
   <Navbar/>
   <Slider/>
   <Categories/>
   <Products/>
   <Newsletter/>
   <Footer/>
  </div>
 );
};

export default Home
