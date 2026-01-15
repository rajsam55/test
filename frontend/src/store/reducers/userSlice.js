import {createSlice} from  "@reduxjs/toolkit"





const initialState = {
    

    username : "",
    password : "",
    loading : false,
    isAuthenticated : false,
    error : null
}

const userSlice = createSlice({

    name : "user",
    initialState,
    reducers : {

         handleLogin : (state,action)=>{


        const {username,password} = action.payload

        
        state.username = username
        state.password  = password
        
        state.isAuthenticated = true

         },


         handleLogout : (state)=>{

            state.user = null
            state.isAuthenticated = false
         }





    }



})

export const {handleLogin, handleLogout} =  userSlice.actions

export default userSlice.reducer

