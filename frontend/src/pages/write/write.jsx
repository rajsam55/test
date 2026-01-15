import "./write.css"
import {useState, useContext} from "react"
import {useLocation, useNavigate}  from "react-router-dom"
import axios from "axios"
import { Context } from "../../context/Context"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/header"







const Write = ()=>{

    const [file, setFile]  = useState(null)
    const [title,setTitle] = useState("")
    const [desc, setDesc]  = useState("")
    const {user}  = useContext(Context)
    

    



        const handleSubmit = async()=>{

            const newPost =  {


                username : user.username,
                title, desc
            }
        if(file){



            const data = new FormData()
            const filename = Date.now()  + file.filename          


        
            data.append("file",file)
            data.append("name", filename)
            newPost.photo = filename



            try{

                await axios.post("http://localhost:6500/api/upload", data)

                
                console.log(data)



            }
            catch(err){




            }


            
        }              

            

            try  {


                const res = await axios.post("http://localhost:6500/api/upload", newPost)

                window.location.replace("/")




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

        { file && <img src= {URL.createObjectURL(file)} alt="" className="" width = {700} height = {500} />}

        <div className="writeFormGroup">



        <form action="" className="formInput"  onSubmit =  {handleSubmit}>

        

        <label htmlFor="fileInput" className="">




        </label>
        



        <input 
        
        
        type = "file" className="formInput" 

        

                

        onChange = {(e)=>setFile(e.target.files[0])}

        
        
        
        />

        <input type="text" className="formInput" 

        onChange = {(e)=>setTitle(e.target.value)}
        placeholder =  "title"
        
        
        
        
        
        />


        <input type="text" className="formInput" 

        onChange = {(e)=>setDesc(e.target.value)}
        placeholder =  "desc"
        
        
        
        
        
        />

        

        


        <button type = "submit" className="publishBtn">Publish</button>


        </form>

        

        </div>



        </div>

        </>
    )
}
export default Write










