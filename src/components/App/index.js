import React, { Component } from 'react';
import '../App.css'; 
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import Footer from '../footer/footer';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Slider from '../Slider/Slider';
import Contact from '../contact/Contact';
import Fruits from '../proudcts/index';
import Features from '../feature/Features';
import About from '../about/about';


class App extends Component {
  render() {
    return (
      <React.Fragment>
         <header>
        <div className="nav">
            <div className="container">
                <h2> fruit <span>market</span></h2>
                <ul>
                    <Link  to="cart"  >Cart</Link>
                    <Link  to="contact">contact</Link>
                </ul>
            </div>
        </div>
    </header>
    <Slider />
    <Features />
    <About />
     
          {/* <Shelf /> */}
          <Fruits />
           
      
        <FloatCart />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
