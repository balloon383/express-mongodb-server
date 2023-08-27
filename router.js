import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router()

router.get("/posts", PostController.getAll);

router.get("/posts/:id", PostController.getOne);

router.post("/posts", PostController.create);

router.put('/posts/:id', PostController.put)

router.delete('/posts/:id', PostController.delete)

export default router