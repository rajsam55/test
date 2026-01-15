import express from "express"

import {updateUser, deleteUser, getUsers, getUser} from "../controllers/user.js"




const router = express.Router()



router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/", getUsers)
router.get("/:id", getUser)

export default router
