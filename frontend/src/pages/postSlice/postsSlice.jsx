import axios from "axios"
import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {


    items : [],
    data : null    

}




export const fetchPosts  = createAsyncThunk(


    "posts/postsFetch",  async()=>{



        try {


            const res = await axios.get("http://localhost:6500/api/posts/posts")
            return res.data




        }

        catch(err){
            console.log(err)



        }
    }


)

const postsSlice = createSlice({


    name : "posts",
    initialState,
    




})