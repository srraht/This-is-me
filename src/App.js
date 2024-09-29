import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Arts from './Arts'
import ImageGallery from './ImageGallery';
import ThankYou from './ThankYou';

function App() {

  return (
    <div className="App">
      <div className="content">
        <Home/>
        <About/>
        <Arts/>
        <ImageGallery/>
        <ThankYou/>
      </div>
    </div>
  );
}

export default App;
