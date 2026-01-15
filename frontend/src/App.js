

import './App.css';

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from './pages/home/Home';
import Write from './pages/write/write';
import Users from './pages/users/users';
import User from "./pages/user/user"
import { useContext } from 'react';
import { Context } from './context/Context';
import SinglePost from './components/singlePost/singlePost';
import Post from './components/post/post';
import {Routes, Route } from 'react-router-dom';
import Test from './pages/file/test';













const  App = ()=>{

  const {user}  = useContext(Context)

  


  
  
  return (

    
        
    
    <Routes>
    
    <Route path = "/"  element =  {<Home/>}/>

    <Route path = "/test"  element =  {<Test/>}/>
    
    <Route path = "/post/:id"  element =  {<Post/>}/>

    <Route path = "/write"  element =  {<Write/>}/>

    { user? (<Route path = "/write"  element =  {<Write/>}/> ):( <Route path = "/"  element =  {<Home/>}/>)}

    <Route path = "/register"  element =  {<Register/>}/>
    {user?  <Route path = "/login" element = {<Login/>} /> : <Route path = "/register" element = {<Register/>} />}    
    
    
    
    <Route path = "/login"  element =  {<Login/>}/>

    { user? <Route path = "/"  element =  {<Home/>}/> : <Route path = "/login"  element =  {<Login/>}/>}

    
    
    </Routes>

    

    
  
          
    
  )
}

export default App;
