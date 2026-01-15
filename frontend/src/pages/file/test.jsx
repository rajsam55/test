import axios from "axios"
import {useState} from  "react"
import "./test.css"




const Test = ()=>{

    const [file, setFile]  = useState(null)


    const handleUpload =  ()=>{

        const formData = new FormData()
        formData.append("file", file)


    


        axios.post("http://localhost:6500/api/upload", formData)

        .then(res=>res.json)
        .catch(err=> console.log(err))

        console.log(file)
            
        

        
    }


    return(


        <div className="">

            <label htmlFor="inputFile" className="">



            </label>

            <input type="file" className="inputText"

            onChange =  {(e)=>setFile(e.target.files[0])}

            
            
            
            
            
            />

            <button onClick =  {handleUpload}>Upload</button>




        </div>
    )
}

export default Test