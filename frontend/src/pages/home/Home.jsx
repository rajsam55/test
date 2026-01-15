
import Featured from "../../components/featured/featured"
import FeaturedText from "../../components/featuredItems/featuredText"
import Header from "../../components/header/header"
import Navbar from "../../components/navbar/navbar"


import "./home.css"

import Users from "../users/users"
import Write from "../write/write"

import Posts from "../../components/posts/posts"
import UseFetch from "../../components/hooks/useFetch"
import User from "../user/user"
import { useContext } from "react"
import { Context } from "../../context/Context"






const Home = ({posts})=>{

    const {user}  =  useContext(Context)

    

    

    

    return(

    <div className="">

    

    
    <Posts posts = {posts}/>

       
    

            
    </div>
    )
}
export default Home








    
