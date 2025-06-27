import mongoose from "mongoose"


const schema  =  mongoose.Schema({})


const  postSchema = new mongoose.Schema({


    title : {

        type : String,
        required : true
    },


    
    desc  : {

        type  : String,
        required : true
    },
    photo : {

        type : String,
        required : true
    },
    author : {

        type : String
    }
    


}, {timestamps : true})

export default mongoose.model("Post", postSchema)





