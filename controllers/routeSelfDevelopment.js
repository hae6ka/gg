import SelfDevelopment from './../models/SelfDevelopment.js';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

export const addSelfDevelopmentPost = async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.password != "SqY7w10-9qkv") {
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

        const newSelfDevelopmentPost = new SelfDevelopment({
            title,
            text,
            imgUrl: fileName,
            popularity
        });

        await newSelfDevelopmentPost.save();

        return res.json({
            newSelfDevelopmentPost,
            message: "Получилось!"
        })
    } catch (err) {
        console.log(err);
        return res.json("Пздц все упало");
    }
};

export const getSelfDevelopmentPosts = async (req, res) => {
    try {
        const posts = await SelfDevelopment.find().sort('-createdAt');
        
        return res.json({ posts });
    } catch (err) {
        console.log(err);
    }
};

export const getSelfDevelopmentPostById = async (req, res) => {
    try {
        const post = await SelfDevelopment.findById(req.params.id)
        
        return res.json(post);
    } catch (err) {
        console.log(err);
    }
};