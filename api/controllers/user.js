import User from "../models/User.js"



export const updateUser = async(req,res)=>{


    try  {
        
    const updatedUser =  await User.findByIdAndUpdate(req.params.id,{$set: req.body, new : true})

    res.status(200).json(updatedUser)

}
catch(err){
    res.json({success : false, message : err.message})



}

}


export const deleteUser = async(req,res)=>{

    try  {

        await User.findByIdAndDelete(req.params.id)

        res.status(200).json("deleted successfully")



    }
    catch(err){

        res.json({success : false, message : err.message})



    }


}

export const getUser = async(req,res)=>{




    try{
        
        
        const user =  await User.findById(req.params.id)

        
        
        res.status(200).json(user)



}

catch(err){

    res.json({success : false, message : err.message})
    console.error("failed to find user")



}

}


export const getUsers = async(req,res)=>{


    try{
        
        
        const users =  await User.find()

        res.status(200).json(users)



}

catch(err){

    res.json({success : false, message : err.message})
    



}

}



