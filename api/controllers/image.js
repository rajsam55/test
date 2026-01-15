import Image  from "../models/Image.js"






export const createImage = async(req,res)=>{



    const {imgUrl}  = req.body    


        try{


            const newImage =   new Image({imgUrl})

            const image =  await newImage.save()


            res.status(200).json({msg : "img created", image})





        }       


    

    catch(err){

        res.status(500).json("error creating image")


    }

    

    

    

}

export const getImage  =  async(req,res)=>{


    const id = req.params.id

    try{

        const image =  await Image.findById(id)


        res.status(200).json(image)



    }

    catch(err){

        res.status(501).json("error fetching image")



    }

}


export const getImages = async(req,res)=>{


    try{



        const images = await Image.find()

        res.status(200).json(images)




    }

    catch(err){

        res.status(503).json("error getting all the images")


    }




}