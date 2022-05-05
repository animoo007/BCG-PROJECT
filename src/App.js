import React, { Component } from 'react';
import './App.css';


import Homepage from './components/homepage/Homepage.component'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import PeoplePage from './components/people/peoplesection.component';
import Features from './components/features-sec/features-sec.component';
import Testimonals from './components/testimonals/testimonals.component'



class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Homepage/>
      <Features/>
      <Testimonals/>
      <PeoplePage/>
      <Footer />
      
    </div>;
  }
}

export default App;
