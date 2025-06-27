import mongoose from "mongoose"



const schema = mongoose.Schema()


const categorySchema = new mongoose.Schema({


    catName :  {

        type : String,
        required : true
    } 




})

export default mongoose.model("Category", categorySchema)