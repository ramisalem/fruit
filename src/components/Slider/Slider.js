import React from 'react';
import '../App.css'; 
import { Link } from 'react-scroll'


class Slider extends React.Component {
    render() {
        return (
            
            <div className="slider">
            <div className="text">
               <h1>from the farm to the house</h1>
            <Link to="product">   <button> shop now </button> </Link>
           </div>
       </div>
         );   
        }
}

export default Slider  ;