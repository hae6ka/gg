import { Router } from 'express';
import { addPsychologyPost, getPhilosophyPosts, getPhilosophyPostById } from './../controllers/routePhilosophy.js';

const router = new Router();

router.post('/addpost', addPsychologyPost);

router.get('/getposts', getPhilosophyPosts);

router.get('/:id', getPhilosophyPostById);

export default router;