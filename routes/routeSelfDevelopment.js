import { Router } from 'express';
import { addSelfDevelopmentPost, getSelfDevelopmentPosts, getSelfDevelopmentPostById } from './../controllers/routeSelfDevelopment.js';

const router = new Router();

router.post('/addpost', addSelfDevelopmentPost);

router.get('/getposts', getSelfDevelopmentPosts);

router.get('/:id', getSelfDevelopmentPostById);

export default router;