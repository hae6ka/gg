import SelfDevelopment from './../models/SelfDevelopment.js';

export const addSelfDevelopmentPost = async (req, res) => {
    try {

        if (req.body.password != "1") {
            return false;
        };

        const { title, text, imgUrl, popularity } = req.body;

        const newSelfDevelopmentPost = new SelfDevelopment({
            title,
            text,
            imgUrl,
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