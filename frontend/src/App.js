

import './App.css';

import { Routes, Route} from "react-router-dom"
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from './pages/home/Home';
import Post from './components/post/post';
import Write from './pages/write/write';
import Settings from './pages/settings/settings';
import Users from './pages/users/users';
import User from "./pages/user/user"












const  App = ()=>{


   

  


   




  
  return (

    
     
    
    
    
    

    
    
     
    
    
    
     <Routes>

      

    <Route exact path = "/" element = {<Home/>} />
    <Route path = "/register" element = {<Register/>} />
    <Route path = "login" element = {<Login />}/>
    <Route path = "/post/:id" element = {<Post/>}/>
    <Route path = "/write" element = {<Write/>}/>
    <Route path = "/updateUser" element = {<Settings/>}/>
    <Route path = "/users" element = {<Users/>}/>
    <Route path = "/user/:id" element = {<User/>}/>
    
    

    
    

    
    

    </Routes>
    

    
    

    
    
    
 
    
  

  

  

          
    
  )
}

export default App;
