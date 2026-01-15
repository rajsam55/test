import mongoose from "mongoose"




const categorySchema = new mongoose.Schema({


    music : {

        type : String

    },

    

    




}, {timestamps : true})

export default mongoose.model("Category", categorySchema)