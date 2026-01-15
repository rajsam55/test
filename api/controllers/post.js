import Post from "../models/Post.js"
import cloudinary from "../utils/cloudinary.js"







export const createPost = async (req, res) => {

    const {title,desc,image}  = req.body



    if(image){


        const imageUploadRes = await cloudinary.uploader.upload(image, {


            "upload_preset" : "f2aq3y4g"



        })

        if(imageUploadRes){


            try{

            

        

            const newPost = new Post({
                
                
                title,
                desc,
                image : imageUploadRes





            })

            const post = await newPost.save()

            res.status(200).json({msg : "new post created successfully", post})


        }


    


    

    catch(err){
        
        console.error(err)       



    }

   }
}

            
    
        
}





export const updatePost = async (req, res) => {



    try {


        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body, new: true })

        res.status(200).json(updatedPost)
    }

    catch (err) {





    }




}



export const deletePost = async (req, res) => {



    try {


        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")


    }
    catch (err) {

        res.status(500).json(err)

    }

}




export const getPosts = async (req, res) => {






    try {

        const posts = await Post.find()

        res.status(200).json(posts)

    }

    catch (err) {

        res.status(401).json(err)



    }

}

export const getPost = async (req, res) => {

    const id = req.params.id


    try {

        const post = await Post.findById(req.params.id)
        res.status(200).json(post)


    }

    catch (err) {

        res.status(400).json(err)


    }

}








