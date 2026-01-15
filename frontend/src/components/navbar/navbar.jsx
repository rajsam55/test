
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import axios from "react"
import { useAuth } from "../../context/Context.js"
import { useSelector, useDispatch } from "react-redux"
import { handleLogout } from "../../store/reducers/userSlice.js"









const Navbar = () => {





    const navigate = useNavigate()

    const dispatch = useDispatch()


    


     const user = useSelector((state)=>state.user)
     const isAuthenticated  = useSelector(state=>state.user.isAuthenticated)

    

     



    


    const logout = async()=>{

        try{
            
            
             await axios.post("http://localhost:6500/api/auth/logout/")

             



             
             


            


    }
    catch(err){


        dispatch(handleLogout())
        


        


    }

}





    
    return (





        <div className="navbar">

            <div className="navbarContainer">

                <div className="logoItems">



                    <Link className="link" to="/" ><h1 className="logoTitle">Etsy</h1></Link>

                </div>





                <div className="navMid">
                    <Link to="/write"><button className="btn">Write</button></Link>
                    <Link to="admin"><button className="btn">Admin</button></Link>
                </div>



                {isAuthenticated ? (<h2 className="logout" onClick = {logout}>logout</h2>)
                
                
                
                : 
                
               (<div className="navbarItems">



                    <div className="">


                    
                     

                        <div className="rightItems">
                                <Link to="/login"><button className="btn">SignIn</button></Link>
                                <Link to="register"><button className="btn">Register</button></Link>

                            </div>
                    



                    </div>
                    
                    




                </div>)
                
                }





            </div>






        </div>


    )
}

export default Navbar

