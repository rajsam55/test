import User from "../models/User.js"



export const updateUser = async(req,res)=>{


    if(req.body.userId===req.params.id){

        const salt = await bcrypt.genSalt(10)
        req.boby.password = await bcrypt.compare(req.body.password, salt)

        try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true})

        res.status(200).json(updatedUser)


    }
    catch(err){

        res.status(501).json("could not update user")




    }

    } else {

        res.status(400).json("you can only update your account")
    }


    




}

export const deleteUser = async(req,res)=>{

     if(req.body.userId===req.params.id){

        const user = User.findById(req.params.id)

        try{


            await User.deleteMany({username : user.username})

        try{

            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("successfully deleted")


        }

        catch(err){
            res.status(500).json(err)


        }

     }
     catch(err){
        res.status(401).json("could not find user")


     }

     } else {

        res.status(404).json("you can only delete your account")
     }

   
}

export const getUser = async(req, res)=>{


    try{

        const user = await User.findById(req.params.id)
        const {password, ...others}  = user._doc
        res.status(200).json(others)

    }
    catch(err){

        res.status(500).json("could not find user")



    }
}

export const getUsers = async(req,res)=>{

    try{
        
        const users = await User.find()
        res.status(200).json(users)


    }
    catch(err){

        res.status(200).json("could not find users")




    }
}