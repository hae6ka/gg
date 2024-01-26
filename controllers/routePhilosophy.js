import Philosophy from './../models/Philosophy.js';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

export const addPsychologyPost = async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.password != "Df83pkp-11gL") {
            return false;
        };

        let fileName;

        if (req.files) {
            fileName = Date.now().toString() + req.files.image.name;
            const __dirname = dirname(fileURLToPath(import.meta.url));
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName));
        }

        const { title, text, imgUrl, popularity } = req.body;
        console.log(title);

        const newPost = new Philosophy({
            title,
            text,
            imgUrl: fileName,
            popularity
        });

        await newPost.save();

        return res.json({
            newPost,
            message: "Получилось!"
        })
    } catch (err) {
        console.log(err);
        return res.json("Пздц все упало");
    }
};

export const getPhilosophyPosts = async (req, res) => {
    try {
        const posts = await Philosophy.find().sort('-createdAt');
        
        return res.json({ posts });
    } catch (err) {
        console.log(err);
    }
};

export const getPhilosophyPostById = async (req, res) => {
    try {
        const post = await Philosophy.findById(req.params.id)
        
        return res.json(post);
    } catch (err) {
        console.log(err);
    }
};