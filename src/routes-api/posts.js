import express from "express";
import postsController from "../controllers/posts";

const router = express.Router();

router.get("/posts", postsController.getPosts);

router.get("/posts/:id", postsController.getPost);

export default router;
