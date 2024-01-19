import Psychology from './../models/Psychology.js';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

export const addPsychologyPost = async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.password != "1") {
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

        const newPost = new Psychology({
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

export const getPsychologyPosts = async (req, res) => {
    try {
        const posts = await Psychology.find().sort('-createdAt');
        
        return res.json({ posts });
    } catch (err) {
        console.log(err);
    }
};

export const getPsychologyPostById = async (req, res) => {
    try {
        const post = await Psychology.findById(req.params.id)
        
        return res.json(post);
    } catch (err) {
        console.log(err);
    }
};