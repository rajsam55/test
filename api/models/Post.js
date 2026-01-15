import mongoose from "mongoose"




const postSchema = new mongoose.Schema({


    title : {

        type : String,
        
                
        
    
         

    },
    

    

    desc : {

        type : String,      
        
    },

    image : {


        
        type : Object,
        required : true

    },
    
       

    
    categories : {

        type : Array,
        required : false


    },
    
    author : {

        type : String
    },



}, {timestamps : true})

export default mongoose.model("Post", postSchema)