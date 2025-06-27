import Post from "../models/Post.js"



export const createPost = async(req,res)=>{

    const newPost  =  new Post(req.body)


    
    try{

        const post = await newPost.save()
        res.status(200).json(post)

        
        
        

}

catch(err){

    res.status(500).json(" error could not create post")



}

}



export const updatePost = async(req,res)=>{


    const post = await Post.finfById(req.params.id)
    if(post.username === req.body.username){


        try{


            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set : req.body, new : true})

            res.status(200).json(updatedPost)
        }

        catch(err){
            res.status(500).json(err)


        }

    } else {

        res.status(401).json("youcan only update your post")







    }

    
    



}



export const deletePost = async(req,res)=>{


    const post = await Post.findById(req.params.id)

    if(post.username === req.body.username){


        try{

        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("post deleted successfuly")
        }

catch(err){

    res.status(500).json("could not delete post")

}

    } else {

        res.status(401).json("you can only delete your post")
    }

    


    
    

}


export const getPost = async(req,res)=>{

    


    
    try{

        const post = await Post.findById(req.params.id)

        res.status(200).json(post)

        
        
        

}

catch(err){

    res.status(403).json("could not find post")



}

}

export const getPosts = async(req,res)=>{

    


    
    try{

        const posts = await Post.find()
        res.status(200).json(posts)

        
        
        

}

catch(err){

    res.status(401).json("could not find posts")



}

}

