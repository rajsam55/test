import Post from "../models/Post.js"




export const createPost = async(req,res)=>{



    const newPost  =  new Post(req.body)

    


    
    try{

        

        const post = await newPost.save()
        res.status(200).json(post)

        
        
        

}

catch(err){

    res.status(500).json(err)



}

}



export const updatePost = async(req,res)=>{

    

        try{


            const updatedPost = await Post.findByIdAndUpdate(req.params.id,  {$set : req.body, new : true})

            res.status(200).json(updatedPost)
        }

        catch(err){


            res.status(500).json(err)


        }

    


}



export const deletePost = async(req,res)=>{

    

            try {

                
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("deleted successfully")


            }
            catch(err){

                res.status(500).json(err)

            }

        }

    


export const getPosts = async(req,res)=>{


       

    
    
    try{

         const posts = await Post.find()
        
        res.status(200).json(posts)

    }

catch(err){

    res.status(401).json(err)



}

}

export const getPost = async(req,res)=>{


    try  {

        const post = await Post.findById(req.params.id)
        res.status(200).json(post)


    }

    catch(err){

        res.status(400).json(err)





    }








}

