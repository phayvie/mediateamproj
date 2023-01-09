import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import Header from './components/header';
import Nowplayingpage from "./components/nowplayingpage";
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/sidebar'


function App(){
  return(
    <div className = 'appbdy'>
     
     <Header/>

      <div className = 'app-body'>
      <Sidebar/>
      <Routes>
      <Route path ='/' element = {<Homepage/>}/>
      <Route path ='/nowplaying' element = {< Nowplayingpage/>}/>
       
     </Routes>
     </div>
     
    
    </div>
  );
}
export default App;
