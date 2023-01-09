import React from 'react';
import Audiopreview from './audiopreview';
import {Link} from 'react-router-dom';
import {IoMdMore} from 'react-icons/io';
 
const Homepage = () => {
    return (
      <div className='hp-body' >
  
          <div className='body'>
            
            <div className='messages'>
             
                {
                  Audiopreview.map((audio)=>(
                    <> 
                   
                    <div className='m1'>
                        <Link to = "/nowplaying">
                            <div className='m2'></div>
                        </Link>
                        
                <div className='m2-footer'>
                  <div className='profile-pic'>{audio.profilepic}</div>
                  <div className='m2-sidebar'>
                    <div>
                      <div className='topic'><h2>{audio.topic}</h2></div>
                   <div className='minister'><h2>{audio.minister}</h2></div>
                   <div className='date-released'><h2>{audio.datereleased}</h2></div>
                    </div>
                    <div>
                      <IoMdMore/>
                    </div>
                </div>
              </div>
                 </div>
                    </>
               
                  )
                    
                  )
                }
             
              
  
         
  
            
          </div>
          
  
          
         </div>
      </div>
      
    );
  }

  export default Homepage;