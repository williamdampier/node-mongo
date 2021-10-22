import Router from 'express';
import Post from "./Post.js";

import PostController from './PostController.js';

const router = new Router();

router.get("/posts", PostController.getAll)
router.get("/posts/:id", PostController.getOne)
router.post("/posts", PostController.postOne)
router.put("/posts", PostController.updatePost)
router.delete("/posts/:id", PostController.deletePost)

export default router;