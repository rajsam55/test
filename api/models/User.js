import mongoose from "mongoose"

const schema = mongoose.Schema()




const userSchema = new mongoose.Schema({

    username : {

        type : String,
        required  : true
        
        
        

    }

    ,

    email : {

        type : String,
        required : true
        
    }
    ,

    password : {


        type : String,
        required : true
        
        
        
                
        
        
    }
    ,

    
    

    photo  :  {

        type  : String,
        


    },

            
          


}
,
{timestamps : true}


)

export default mongoose.model("User", userSchema)