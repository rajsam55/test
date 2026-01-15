import express from "express"

import {createPost, updatePost, deletePost, getPosts, getPost} from "../controllers/post.js"




const router = express.Router()



router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.get("/", getPosts)
router.get("/:id",  getPost)








export default router

