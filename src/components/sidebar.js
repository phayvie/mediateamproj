import { FaHome} from 'react-icons/fa';
import {BsBookmarksFill} from 'react-icons/bs';
import {MdInfo} from 'react-icons/md';
 
 


function Sidebar(){
    return(
      <div className = 'side-bar'>
       
        <FaHome/>
        <BsBookmarksFill/>
        <MdInfo/>
      
      </div>
    );
  }
  export default Sidebar;
  