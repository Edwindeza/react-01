import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselSlide from '../components/CarouselSlide';
import Footer from '../components/Footer';

import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'


const API = 'http://localhost:3000/initalState'

const App = () => {
  const [videos, categories] = useInitialState(API);  

 
  return (
    <div className="App">
      <Header/>
      <Search/>
      {categories.length > 0 && (
        categories.map((category) => (
          videos[category].length > 0 && (
            <Categories title={category}>
              <Carousel>
                { videos[category].map(item => (
                  <CarouselSlide key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
        )))
      )}
      <Footer/>
    </div>
  )
};

export default App;