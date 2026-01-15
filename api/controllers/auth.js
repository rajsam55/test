import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"







export const register = async(req,res)=>{


    const {username, email, password}  = req.body

    
    try {


        if (!username  || !email || !password){

            return res.status(400).json("all fields are required")
        }

        
        const userAlreadyExists =  await User.findOne({email})

        if(userAlreadyExists){

            return res.status(400).json("user already exists!")
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

           

        
    

        const newUser  = new User({

            username,
            email,
            hashedPass,
            
            
        })

        const user = await newUser.save()

        res.status(200).json(user)    

               

    }


         

    catch(err){

        return res.json({
            success : false,
            message : err.message
        })



    }    

}

export const login =  async(req,res)=>{

    const {username, password}  = req.body

    try {
        
    const user = await User.findOne({username})

    if(!user)
    return res.json("invalid username")

    const match = await bcrypt.compare(password, user.password)

    

    const token =  jwt.sign({id: user._id}, process.env.JWT, {expiresIn : "7d"})


    res.cookie("token", token, {
        httpOnly  : true,
        secure : true,
        sameSite : "strict",
        maxAge : 7 * 24 * 8* 60 * 60 * 1000
    })
    res.json({

        success : true,
        message : "user logged in successfully"
    })


}

catch(err){

    res.json({
        success : false,
        message : err.message
    })



    
}

}

export const logout =  async(req,res)=>{


          try {
            
          res.clearCookie("token", {
          httpOnly : true,
          secure : true,
          sameSite : "strict"
        })
        return res.json ({
        success : true,

        message :  "user logged out successfully"
,
        })

    }
    catch(err){
        res.json({

            success : false,
            message : err.message

        })


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



   





