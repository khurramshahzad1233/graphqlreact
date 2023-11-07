import React,{useEffect} from 'react';
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home';

import axios from 'axios';


const App = () => {

  

  async function getprofiledata(){
    try {
      const mydata=await axios.get("/api/user/me");
    console.log(mydata)
    } catch (error) {
      console.log(error.response.data.message)
    }
    
  };


  useEffect(()=>{
    getprofiledata();

  },[])
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App