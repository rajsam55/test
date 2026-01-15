import User from "../models/User.js"





export const updateUser = async(req,res)=>{


    try{

        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set : req.body, new : true})
        res.status(200).json(updatedUser)


    }

    catch(err){

        res.status(500).json(err)



    }


    

}





export const deleteUser = async(req,res)=>{

    try {

        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")


    }
    catch(err){
        res.status(500).json(err)



    }
     
}

export const getUser = async(req, res)=>{

    


    try{


        const user = await User.findById(req.params.id)       

        const {password, ...others}  = user._doc
   
        res.status(200).json({others})

    }
    catch(err){

        res.status(500).json(err)



    }
}


export const getUsers = async(req,res)=>{

    

    

        try{

            
            const users = await User.findAll() 
            
            res.status(200).json("saved users to db")
            



        }

        catch(err){

            res.status(500).json(err)

      }



    }   



   

