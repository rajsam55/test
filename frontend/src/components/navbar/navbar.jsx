
import { Link} from "react-router-dom"
import "./navbar.css"
import { useContext} from "react"
import  { Context} from "../../context/Context.js"








const Navbar = ()=>{

    const {user, dispatch}   = useContext(Context)

    


const logout = ()=>{


    dispatch({type : "LOGOUT"})




}

    


   


    return(



        

        <div className="navbar">
        <div className="navbarContainer">
        
        <div className="logoItems">
        <img src="./logo192.png" alt="" width = {32} height = {32} className="" />
        <Link className = "link" to = "/" ><h1 className = "logoTitle">Etsy</h1></Link>
        
        </div>


        <div className="navBarSearch">

        <input type="text" placeholder = "search for anything" className="navBarSearchInput" />
        <img src="./images.jpg" alt="" width = {22} height = {22} className="navSearchImg" />

        </div>

        <Link to = "/login"><button disabled = {!user}className="logOutBtn" onClick = {logout} >{user && "LOGOUT"}</button></Link>

        
    
        <Link to = "/write"><button className="btnItems">Write</button></Link>
        <Link to = "/updateUser"><button className="btnItems">Update User</button></Link>
        <Link to = "/users"><button className="btnItems"> Users</button></Link>
        <Link to = "/user"><button className="btnItems"> User</button></Link>
        

        
        
        
        
        
        
        
        <img src="./logo192.png" width = {16} height = {16} alt="" className="" /> 
        
        <div className="navbarItems">        
         
        
        <Link to = "/register" ><button className="btnItems">Register</button></Link>
        <Link to = "/login"><button className="btnItems">SignIn</button></Link>
        
        
        
        
        
        
        



        </div>

        





        </div>



            
        </div>

        
    )
}

export default Navbar








    

