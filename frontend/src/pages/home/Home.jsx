
import Featured from "../../components/featured/featured"
import FeaturedText from "../../components/featuredItems/featuredText"
import Header from "../../components/header/header"
import Navbar from "../../components/navbar/navbar"
import axios from "axios"
import { useEffect, useState } from "react"


import "./home.css"

import Users from "../users/users"
import Write from "../write/write"

import Posts from "../../components/posts/posts"
import UseFetch from "../../components/hooks/useFetch"
import Post from "../../components/post/post"
import { useAuthStore } from "../../store/authStore"
import New from "../newPage/new"
import { useLocation } from "react-router-dom"
import SinglePost from "../../components/singlePost/singlePost"
import Single from "../single/single"
import { useAuth } from "../../context/Context"
import Services from "../../components/services/services"
import client from "@sanity/client"
import Menu from "../../components/menu/menu"
import ImgContainer from "../imgContainer/imgContainer"
import UserProfile from "..//..//components/userprofile/userProfile"








const Home = () => {

    

    const [file, setFile]  = useState(null)

    

    const [posts, setPosts] = useState([])
    const { search } = useLocation()
    
    

    useEffect(() => {



        const getPosts = async () => {


            try {


                const res = await axios.get("http://localhost:6500/api/posts")
                setPosts(res.data)

            }

            catch (err) {



            }

        }
        getPosts()







    }, [])





    return (

        <>

        <UserProfile/>

        

    <div className="home">

       



    

    <Posts  posts = {posts}/>  
    
    

    
        

         
    

            
    </div>
    </>

    )
}
export default Home











