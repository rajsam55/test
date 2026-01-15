import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import multer from "multer"
import {config} from "dotenv"
import authRouter from "./routes/auth.js"
import userRouter from "./routes/users.js"
import categoryRouter from "./routes/category.js"
import postRouter from "./routes/posts.js"
import path from "path"






config()

const app = express()





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




const storage =  multer.diskStorage({


    destination :  function (req,file, cb){

        cb(null, "images")


    },

    filename   : function(req, file, cb){

        cb(null, file.fieldname + "_" + Date.now()  + path.extname(file.originalname))
    }






})




const upload = multer({storage : storage})

app.post("/api/upload", upload.single("file"), (req,res)=>{

    console.log(req.file)
    
    

})



//middleware

app.use(express.json())
app.use(cors())

app.use("/api/auth/", authRouter)
app.use("api/users/", userRouter)
app.use("/api/category/", categoryRouter)
app.use("/api/posts/", postRouter)





 




app.listen(6500, ()=>{

    console.log ("listening on port 6500")

    connect()
})








