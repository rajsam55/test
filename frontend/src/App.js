

import './App.css';

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from './pages/home/Home';
import Write from './pages/write/write';
import Users from './pages/users/users';
import User from "./pages/user/user"
import { useEffect, useState } from 'react';
import { Context, useAuth } from './context/Context';
import SinglePost from './components/singlePost/singlePost';
import Post from './components/post/post';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Test from './pages/file/test';
import Navbar from './components/navbar/navbar';
import { useAuthStore } from './store/authStore';
import Single from './pages/single/single';
import Sidebar from './components/sidebar/sidebar';
import Posts from './components/posts/posts';
import Footer from './components/footer/footer';
import axios from "axios"
import Admin from './pages/admin/admin';
import Header from './components/header/header';
import { client } from './components/lib/client';
import NotFound from './pages/notfound/notfound';
import { useSelector } from 'react-redux';








const  App = ()=>{   


  const user = useSelector(state=>state.user)

  console.log(user)

  


  


  

  
  
  
  return (


    


    <>

    

    <Navbar/>  

    
    
    
    



  
    
        
    
    <Routes>
    
    

    
  
    <Route exact path = "/"  element =  {<Home/>}/>

    <Route path = "/write" element =  {<Write/>}/>

    <Route path = "/user" element =  {<User/>}/>

    <Route path = "/register" element =  {<Register/>}/>

    <Route path = "/post/:postId" element = {<SinglePost/>} /> 

   <Route path = "/login"  element = {<Login/>}/> 

    <Route path = "/admin"  element = {<Admin/>}/> 
    


       
    
    </Routes>

    <Footer/>

    

    
    
</>

    

    

    
  
          
    
  )
}

export default App;

export const getServerSideProps = async()=>{

  const query = `*[_type == "pizza]`

  const pizzas = await client.fetch(query)
  return {
    props : {
      pizzas
    }
  }
}





