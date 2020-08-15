import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Index from './Components/Index'
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
