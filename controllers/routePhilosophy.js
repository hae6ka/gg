import Philosophy from './../models/Philosophy.js';

export const addPsychologyPost = async (req, res) => {
    try {

        if (req.body.password != "1") {
            return false;
        };

        const { title, text, imgUrl, popularity } = req.body;

        const newPhilosophyPost = new Philosophy({
            title,
            text,
            imgUrl,
            popularity
        });

        await newPhilosophyPost.save();

        return res.json({
            newPhilosophyPost,
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