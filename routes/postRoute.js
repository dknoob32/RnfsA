const express = require("express");
const { requireSignIn } = require("../controller/userController");
const {
  createPostController,
  getAllPost,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controller/postController");

//router object
const router = express.Router();

//route
//create-post
router.post("/create-post", requireSignIn, createPostController);

//getall post
router.get("/get-all-post", getAllPost);

//GET USER POSTs
router.get("/get-user-post", requireSignIn, getUserPostsController);

//DELEET POST
router.delete("/delete-post/:id",requireSignIn, deletePostController);

//UPDATE POST
router.put("/update-post/:id" ,requireSignIn, updatePostController);

//export
module.exports = router;
