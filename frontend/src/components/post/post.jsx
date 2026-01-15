import "./post.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"

import { useLocation } from "react-router-dom"
import { AuthContext, useAuth } from "../../context/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../navbar/navbar"
import { Context } from "../../context/Context"
import { useSelector } from "react-redux"




const Post = ({ post }) => {



  const user = useSelector(state => state.user)

  














  return (


    <>


      <img src="" alt="" className="" />


      <div className="post">

        <div className="postInfo">

          <div className="postCat">



          </div>



          <img src= {post.image?.url} alt="" className=""width = {350} height = {250}/>

          <Link to={`/post/${post._id}`} ><span className="postTitle">{post.title}

          </span></Link>





          <span className="">{post.desc}</span>
          <span className="">{post.username}</span>

          <p className="postDesc">{Post.desc}

          </p>




          <hr />

          <span className="postDate">1 hr ago</span>



        </div>




      </div>
    </>


  )
}

export default Post




