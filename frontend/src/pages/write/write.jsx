import "./write.css"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { useSelector } from "react-redux"














const Write = () => {



    const user = useSelector(state=>state.user)

    const isAuthenticated = useSelector(state=>state.user.isAuthenticated)


    const [postImg, setPostImg] = useState("")

    console.log(postImg)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [post, setPost] = useState({

        title : "",
        desc : ""
    })
    const navigate = useNavigate()

    const imageUploadHandler = (e)=>{

        const file = e.target.files[0]

        transformFile(file)


    }

    const transformFile = (file)=>{


        const reader = new FileReader()

        if(file)  {


        reader.readAsDataURL(file)

        reader.onloadend = ()=>{


            setPostImg(reader.result)

        }


        }else{

            setPostImg("")
        }




    }





    const handleSubmit = async (e) => {

        e.preventDefault()
        
        const newPost = {

            username : user.username,
            title : post.title,
            desc  : post.desc,
            image : postImg           
                        

        }

                   







        try {

            const res = await axios.post(`http://localhost:6500/api/posts/`, newPost)

            setPost(res.data)

            



            console.log(res.data)

            navigate("/")



        }
        catch (err) {



        }


    }



    return (


        <>





            <div className="write">




                


                {isAuthenticated ? <div className="writeFormGroup">

                    <h1 className="writeBlogTitle">Write New Blog</h1>

                    <img src={postImg} alt="" className="" width={25} height={25} />







                    <form className="" onSubmit={handleSubmit} >

                        <label htmlFor="fileInput" className="">






                        </label>


                        <input type="file" className="formInputs"

                            onChange={imageUploadHandler}

                            accept = "image/"


                        />

                        <input type="text" className="formInputs"


                            onChange={(e) => setPost({...post, title :e.target.value})}

                            placeholder="title"

                            value = {post.title}

                            

                            

                            











                        />


                        <input type="text" className="formInputs"


                            onChange={(e) => setPost({...post, desc : e.target.value})}

                            placeholder="desc"

                            

                            












                        />




                        <button className="publishBtn" type="submit">Publish</button>




                    </form>


                </div>
                
                
                :


                <Link to = "/login"><span className="">Please Login to Create new Blog</span></Link>
                
                
                
                
                
                }



            </div>

        </>
    )
}




export default Write










