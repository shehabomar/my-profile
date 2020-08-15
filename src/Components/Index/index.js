import React, {Component} from 'react';
import Home from './../Home';
import About from './../About';
import Portfolio from './../Portfolio';
import Footer from './../Footer';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../Work';

class Index extends Component {
  render(){
    return (
      <div className="Index">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
