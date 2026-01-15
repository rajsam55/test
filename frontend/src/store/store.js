import userReducer  from "../store/reducers/userSlice"
import {configureStore} from "@reduxjs/toolkit"





 export const store = configureStore({

    reducer : {

        user : userReducer
    }
})