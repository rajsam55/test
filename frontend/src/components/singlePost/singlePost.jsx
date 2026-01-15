import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import "./singlePost.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store/authStore"
import { useAuth } from "../../context/Context"
import { useContext } from "react"
import { useSelector } from "react-redux"








const SinglePost = () => {



    

    const [post, setPost] = useState({

        title : "",
        desc : ""
    })
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")




    const [updateMode, setUpdateMode] = useState(false)
    const location = useLocation()

    



    const navigate = useNavigate()





    const path = location.pathname.split("/")[2]




    useEffect(() => {





        const getPost = async () => {



            const res = await axios.get("http://localhost:6500/api/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)


            console.log(res.data)


        }

        getPost()




    }, [path])




    const handleDelete = async () => {


        try {

            await axios.delete(`http://localhost:6500/api/posts/${post._id}`)

            navigate("/")




        }
        catch (err) {



        }

    }


    const handleUpdate = async () => {


        try {



            const res = await axios.put(`http://localhost:6500/api/posts/${post._id}/`, {title,desc})

            setPost(res.data)

            console.log(res.data)
            
            setUpdateMode(false)

            navigate("/post/" + res.data._id)


        }





        catch (err) {



        }

    }





    return (



        <div className="singlePost">


            <div className="singlePostWrapper">

                 <img src={post.image?.url} alt="" className="" width = {750} height = {400} />










                {updateMode ? (



                    <input type="text"

                        className="singlePostInput"

                        value={title}



                        onChange={(e) => setTitle(e.target.value)}



                    />







                ) : (





                    <h1 className="singlePostTitle">



                        {title}


                        <div className="singlePostEdit">

                            <FontAwesomeIcon className="singlePostIcon"

                                icon={faTrash}
                                onClick={handleDelete}



                            />
                            <FontAwesomeIcon className="singlePostIcon"
                                icon={faPenToSquare}
                                onClick={() => setUpdateMode(true)}


                            />


                        </div>


                    </h1>



                )}

                <div className="singlePostInfo">

                    <span className="singlePostAuthor">Author : <b>Raj</b></span>
                    <span className="singlePostDate">  1 hr ago</span>



                </div>


                {updateMode ? (

                    <textarea type="text"


                        value={desc}


                        className="singlePostDesc"



                        onChange={(e) => setDesc(e.target.value)}

                    >



                    </textarea>





                ) : (

                    <p className="singlePostDesc">{desc}</p>

                )}


                {updateMode && <button className="singlePostBtn" onClick={handleUpdate} >Update</button>}









            </div>


           

        </div>


    )
}



export default SinglePost