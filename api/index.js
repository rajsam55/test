import mongoose from "mongoose"
import express from "express"
import cors from "cors"


import {config} from "dotenv"
import authRouter from "./routes/auth.js"
import userRouter from "./routes/users.js"
import categoryRouter from "./routes/category.js"
import postRouter from "./routes/posts.js"







const app = express()

config()



const connect = async()=>{

    try  {

        await mongoose.connect(process.env.mongodb)


    }

    catch(err){

        throw err



    }

  




}


mongoose.connection.on("connected", ()=>{

    console.log("connected to db")





})


//middleware

app.use(express.json())
app.use(cors())

app.use("/api/auth/", authRouter)
app.use("api/users/", userRouter)
app.use("/api/category/", categoryRouter)
app.use("/api/posts/", postRouter)




 




app.listen(6600, ()=>{

    console.log ("listening on port 6600")

    connect()
})








