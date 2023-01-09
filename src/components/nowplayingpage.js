import React from 'react';
import './contact';
import Homepage from './homepage.js'
import './nowplaying.css';


function Nowplayingpage(){
  return(
    <div className='np-body'>
      <div className='audio-playing'>
       
      </div>
 
     <div className='more'>
      <Homepage/>
     </div>
    </div>
  );
}
export default Nowplayingpage;