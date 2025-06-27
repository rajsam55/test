import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




export const register = async (req,res)=>{


    
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    



    try  {    

    

    const newUser = new User({

            username  : req.body.username,
            email : req.body.email,
            password  : hashedPass,
            
            
    
       })

    
        
        const user = await newUser.save()

        res.status(200).json(user)


    }


    catch(err){

        res.status(404).json(err)



    }

    

}

export const login = async(req,res)=>{


    



    try {

    const user =  await User.findOne({username : req.body.username})
    if(!user)  return res.status(401).json("wrong credentials")

    const match  = await bcrypt.compare(req.body.password, user.password)

    if(!match) return  res.status(401).json("wrong credentials")

    res.status(200).json("logged in successfully")


    const token =  jwt.sign({"userInfo" : {


        "username" : user.username,
        "roles"   : user.roles


    }}, process.env.JWT,{expiresIn : age})


    const {password : userPassword,  ...userInfo}  =  user._doc


    const age = 1000 * 60 * 60 * 24 * 7


    res.cookie("token", token ,{

        httpOnly : true,
        secure  : true,
        sameSite : none,
        maxAge : age,
        
    })

    .status(200).json({userInfo})

    }

    catch(err){


        res.status(404).json("unable to login")
    }



    }

    export const logout =  ()=>{


        if(!cookies?.jwt) return res.senStatus(204)

            res.clearCookie("jwt", {httpOnly : true, secure : true}).json("logout successful")





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



   





