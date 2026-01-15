import express from "express"

import {createCategory, updateCategory, deleteCategory, getCategory, getCategories} from "../controllers/category.js"




const router = express.Router()



router.post("/", createCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)
router.get("/", getCategories)
router.get("/:id",  getCategory)






export default router
