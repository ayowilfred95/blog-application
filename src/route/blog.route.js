const express = require("express")
const { createBlog, getAllBlogs, getBlogPostById, updateBlogPostById, deleteBlogPostById} = require("../controller/blog.controller")

const router = express.Router()

router.post("/posts",createBlog)
router.get("/posts",getAllBlogs)
router.get("/posts/:postId",getBlogPostById)
router.put("/posts/:postId",updateBlogPostById)
router.delete("/posts/:postId",deleteBlogPostById)

module.exports = router;
