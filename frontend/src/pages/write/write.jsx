import "./write.css"
import {useState, useContext} from "react"
import axios from "axios"
import { Context } from "../../context/Context"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/header"
import "core-js/stable"






const Write = ()=>{

    const [file,setFile]  = useState()
    const [title,setTitle] = useState("")
    const [desc, setDesc]  = useState("")
    const {user}  = useContext(Context)


    const handleSubmit = async (e)=>{
        e.prevent.default()

        const newPost =  {

            user : user.username,
            title,
            desc
            

        }

        if(file){

            const data = FormData()
            const fileName =  Date.now() + file.name


            data.append("name", fileName)
            data.append("file",file)
            newPost.photo = fileName


            try{

                await axios.post("http://localhost:6600/api/upload", data)

            }
            catch(err){

                


            }
        }

        try {

            const res = await axios.post("http://localhost:6600/api/posts", newPost)
            window.location.replace("/post" + res.data._id)

        }
        catch(err){




        }



    }


    return(

        <> 

        <Navbar/>
        <Header/>

        <div className="write">

        <h1 className="writeBlogTitle">Write New Blog</h1>

        { file && <img src= {URL.createObjectUrl} alt="" className="" />}

        <div className="writeFormGroup">

        <form action="" className="writeForm" onSubmit = {handleSubmit}>



        <label htmlFor="fileInput" className="">




        </label>
        



        <input 
        
        
        type="file" className="" 

        id = "fileInput"
        

        onChange = {(e)=>setFile(e.target.files[0])}
        
        
        />

        <input 

        type="text" className="formInput" 

        placeholder = "title"

        

        onChange = {(e)=>setTitle(e.target.value)}



        
        />
        <textarea 
        name="" id="" className="formInput"

        placeholder = "write your blog here"

        type = "text"
        onChange = {(e)=>setDesc(e.target.value)}
        
        
        
        
        
        >
        

        






        </textarea>


        <button type = "submit" className="publishBtn">Publish</button>

        </form>

        </div>



        </div>

        </>
    )
}
export default Write










