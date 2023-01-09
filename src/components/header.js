import React from 'react';
import Watchmanlogo from './images/watchman logo.png';
 
const Header = () => {
    return (
      <div>
 
        <header>
          <div className='left-part'>
          <div className='watchmanlogo'><img src={Watchmanlogo}  alt = "Watchman Logo"/></div>
          <div className='parish'>
           <h1>WCCF UNIBEN</h1>
           <h2>UBTH Chapter</h2>
          </div>
   
          </div>
      
          <div className='input'>
           <input placeholder = "search"/>
          </div>
        </header>
        </div>
        )
        };

export default Header;