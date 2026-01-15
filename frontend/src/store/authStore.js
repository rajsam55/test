import {create}  from "zustand"

import axios from "axios"


export const useAuthStore = create(set=>({

    user : null,
    isLoading : false,
    error : null,
    message : null,
    isAuthenticated :false,
    isCheckingAuth : false,


    register : async(username,email, password)=>{

             set({isLoading : true, error : null})

        try {


            const res = await axios.post("http://localhost:6500/api/auth/register", {username,email, password})

            set({ user : res.data.user, isLoading : false, error : null, isAuthenticated : true})
        }

        catch(err){

            set({error : err.res.data.message}|| "error in registering", {isLoading : false})



        }

    },


        login : async(username,password)=>{

             set({isLoading : true, error : null})

        try {


            const res = await axios.post("http://localhost:6500/api/auth/login", {username, password})

            set({user : res.data.user, isLoading : false, error : null, isAuthenticated : true})
        }

        catch(err){

            set({error : err.res?.data.message}|| "error in login", {isLoading : false})



        }


        


    },

    checkAuth : async()=>{

             set({isCheckingAuth : true, error : null})

        try {


            const res = await axios.get("http://localhost:6500/api/auth/check-auth")

            set({user : res.data.user, isCheckingAuth : false, error : null, isAuthenticated : true})
        }

        catch(err){

            set({error : null} || {isAuthenticated : false}, {isCheckingAuth : false})



        }

    }




}))