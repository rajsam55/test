import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"







export const register = async(req,res)=>{

    const {username, email, password} = req.body

   


        if (!username  || !email || !password){

            return res.status(500).json("all fields are required")
        }

        try {
        

        
        const userAlreadyExists =  await User.findOne({email})

        if(userAlreadyExists){

            return res.status(501).json("user already exists!")
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass =  await bcrypt.hash(password, salt)
        
        
        const newUser  = new User({

            username ,
            email  ,
            password : hashedPass,
            
            
            
        })

        const user = await newUser.save()

        await user.save()

        res.status(200).json({

            message : "user created successfully",
            user : {
                id : user._id,
                username : user.username,
                role : user.role
            }




        })   
                     

    }
         

    catch(err){
        res.status(501).json({message : "error"})                    

    }    

}

export const login =  async(req,res)=>{

    const {username, password}  = req.body

    
    try {
        
    const user = await User.findOne({username})

    if(!user)
    return res.json("invalid username")

    const match = await bcrypt.compare(password, user.password)
    if(!match)

    return res.json("invalid password")    

       

    const accessToken =  jwt.sign({id: user._id, role : user.role, username : user.username}, process.env.JWT_ACCESS_TOKEN, {expiresIn : "15m"})

    
    
    


    const refreshToken = jwt.sign({id : user._id, role : user.role}, process.env.JWT_REFRESH_TOKEN, {expiresIn : "7d"})

    res.cookie("refreshToken", refreshToken, {
        httpOnly  : true,
        secure : process.env.NODE_ENV === "development",
        sameSite : "strict",
        maxAge : 7 * 24 * 60 * 60 * 1000
    })
    res.json({accessToken, user : {

        id : user._id,
        username : user.username,
        email : user.email,
        password : user.password,        
        role : user.role



    }}

        
    )


    


}

catch(err){

    console.error(err)
    return res.status(501).json(err) 



    
}



}


export const refreshToken = async(req,res)=>{

    const token = req.cookies.refreshToken

    if(!token){

        return res.status(404).json("no token provided")
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_TOKEN)
        const user = await User.findById(decoded.id)


        if(!user){

            return res.status(404).json("no user found")
        }
        

        const newAccessToken = jwt.sign({id : user._id, role : user.role}, process.env.JWT_ACCESS_TOKEN, {expiresIn: "15m"})


        res.status(200).json({
            accessToken : newAccessToken,
            user :{


                id : user._id,
                username : user.username,
                email : user.email,
                role : user.role,
                



            }
        })


    }

    catch(err){
        console.error("error refreshing token")
        res.status(501).json("server error")




    }
}

export const logout = (req,res)=>{


    try {

        res.clearCookie("refreshToken",{

            httpOnly : true,
            secure : process.env.NODE_ENV === "development",
            sameSite : "strict", 
            maxAge : 7 * 24 * 60 * 60 * 1000
            




    })
    res.status(200).json("logged out successfully!")




    }

    catch(err){

        console.error("error logging out user")




    }





}


    

    
 // export const login = async(req, res)=>{

//     const {username, password}  = req.body

//     if(!username || !password) return res.status(304).json("both fields required")

//     const user = await User.findOne({username}).exec()

//     if(!user || !user.active) return res.status(403).json("no user found")

//     const match  = await bcrypt.compare(password, user.password)

//     if(!match)  res.status(401).json("forbidden")

//     const accessToken =  jwt.sign({"userInfo": {


//         "username"  : user.username,
//          "roles"  : user.roles

//     }},  process.env.secretAccessKey,{expiresIn : "5m"})

    


//     const refreshToken =  jwt.sign({username : user.username}, process.env.secretRefreshKey)


//     res.cookie("jwt", refreshToken,
//    {httpOnly : true, secure : true, sameSite : none, maxAge : age})

//     res.json(accessToken)
// }


// export const refresh = async(req,res)=>{

//     const cookies = req.cookies

//     if(!cookies?.jwt) res.status(504).json("not found cookies")

//     const refreshToken =  cookies.jwt

//     jwt.verify(refreshToken, process.env.secretRefreshKey, asyncHandler(async(err, decoded)=>{

//         if(err) return res.status(501).json("errors found")

//         const user = await User.findOne({username : decoded.username}).exec()

//         if(!user) res.status(503).json("not found user")


//         const accessToken =  jwt.sign({"userInfo": {


//         "username"  : user.username,
//          "roles"  : user.roles

//     }},  process.env.secretAccessKey,{expiresIn : "5m"})

//     res.json(accessToken)

        
//     }

    

//     ))

// }

// export const logout =  ()=>{


//     if(!cookies?.jwt) return res.sendStatus(204)
//     res.clearCookie("jwt",{httpOnly : true, secure : true, sameSite : none, maxAge : age})
//     json("you are logged out")

    

// }



   





