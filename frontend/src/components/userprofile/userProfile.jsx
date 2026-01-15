import {useSelector, useDispatch}  from "react-redux"
import { handleLogin } from "../../store/reducers/userSlice"




const UserProfile = () => {

  



    const user = useSelector((state)=> state.user)

    const isAuthenticated = useSelector(state=>state.user.isAuthenticated)



    console.log(user)










  return (


    <div>


    {isAuthenticated ? <span className="">welcome:{user.username}</span> : <p>please login</p>}
    
    
        
        
        
        
        
        
        
    </div>
  )
}

export default UserProfile