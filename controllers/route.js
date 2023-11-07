import Post from './../models/posts.js';

export const addPost = async (req, res) => {
    try {
        const { title, text } = req.body;

        const newPost = new Post({
            title,
            text
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

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find().sort('-createdAt');
        
        return res.json({ post });
    } catch (err) {
        console.log(err);
    }
};