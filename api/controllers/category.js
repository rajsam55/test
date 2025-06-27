import Category from "../models/Category.js"



export const createCategory = async(req,res)=>{

    const category  =  new Category(req.body)


    
    try{

        const savedCategory = await category.save()
        res.status(200).json(savedCategory)

        
        
        

}

catch(err){

    res.status(400).json("could not create category")



}

}



export const updateCategory = async(req,res)=>{

    


    
    try{

        const updatedCategory = await Category.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true})
        res.status(200).json(updatedCategory)

        
        
        

}

catch(err){

    res.status(400).json("could not update category")



}

}

export const deleteCategory = async(req,res)=>{

    


    
    try{

        await Category.findByIdAndDelete(req.params.id)
        res.status(401).json("category deleted successfuly")

        
        
        

}

catch(err){

    res.status(400).json("could not delete category")



}

}


export const getCategory = async(req,res)=>{

    


    
    try{

        const category = await Category.findById(req.params.id)
        res.status(200).json(category)

        
        
        

}

catch(err){

    res.status(400).json("could not find category")



}

}

export const getCategories = async(req,res)=>{

    


    
    try{

        const categories = await Category.find()
        res.status(200).json(categories)

        
        
        

}

catch(err){

    res.status(400).json("could not find categories")



}

}

