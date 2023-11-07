import { Router } from 'express';
import { addPost, getPosts } from './../controllers/route.js';

const router = new Router();

router.post('/addpost', addPost);

router.get('/getposts', getPosts);

export default router;