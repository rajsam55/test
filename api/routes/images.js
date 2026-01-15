import express from "express"
import { createImage, getImage, getImages } from "../controllers/image.js"





const router =  express.Router()



router.post("/",  createImage)

router.get("/:id", getImage)

router.get("/", getImages)




export default router