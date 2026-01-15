import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import multer from "multer"
import {config} from "dotenv"
import authRouter from "./routes/auth.js"
import userRouter from "./routes/users.js"
import categoryRouter from "./routes/category.js"
import postRouter from "./routes/posts.js"
import imageRouter  from "./routes/images.js"
import path from "path"
import {dirname}  from "path"
import { fileURLToPath } from 'node:url'



config()

const app = express()


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


app.use(express.json())




app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
  );




const connect = async()=>{

    try  {

        await mongoose.connect(process.env.mongodb)


    }

    catch(err){

        

    }

  




}


mongoose.connection.on("connected", ()=>{

    console.log("connected to db")





})










//middleware







app.use("/api/auth/", authRouter)
app.use("/api/users/", userRouter)
app.use("/api/category/", categoryRouter)
app.use("/api/posts/", postRouter)
app.use("/api/images", imageRouter)
app.use("api/upload", postRouter)






 




app.listen(6500, ()=>{

    console.log ("listening on port 6500")

    connect()

    
})









