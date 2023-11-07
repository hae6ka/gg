import { Router } from 'express';
import { addPsychologyPost, getPsychologyPosts, getPsychologyPostById } from './../controllers/routePsychology.js';

const router = new Router();

router.post('/addpost', addPsychologyPost);

router.get('/getposts', getPsychologyPosts);

router.get('/:id', getPsychologyPostById);

export default router;