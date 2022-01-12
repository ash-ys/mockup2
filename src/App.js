import React from 'react'
import Directory from './components/Directory';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import SpecialOffers from './components/SpecialOffers';


const App = ()=> {
      return (
        <>
        <Navbar />
        <Slide  />
        <Directory />
        <SpecialOffers />
        </>
  );
}


export default App;
