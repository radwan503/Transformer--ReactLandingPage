import React from 'react';

import {Blog,Features,Footer,Header,Possibility,WhatTRANSFORMER} from './containers';
import {CTA,Brand,Navbar} from './components'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>

      <Brand/>
      <WhatTRANSFORMER/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
