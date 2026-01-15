import {useState, useEffect, useContext} from "react"








const UseFetch = ()=>{

    

    

    const [user, setUser]  = useState({})

    const [storedData, setStoredData] = useState(null)


     useEffect(()=>{



          
        
        try{

        localStorage.setItem("myUser", JSON.stringify(user))
        

        setUser(JSON.parse("myUser"))


        }

        catch (e){


        }
        









    },[])



    useEffect(()=>{

        const dataFromStoredData = localStorage.getItem("myUser")

        try{
            
            
            setStoredData(JSON.parse(dataFromStoredData))

        }

        catch(e){

            setStoredData(dataFromStoredData)


        }










    },[])

return(

     <div>
    <pre>{JSON.stringify(storedData, null,2)}</pre>




    </div>




    
)


}

export default UseFetch