import Psychology from './../models/Psychology.js';

export const addPsychologyPost = async (req, res) => {
    try {

        if (req.body.password != "1") {
            return false;
        };

        const { title, text, imgUrl, popularity } = req.body;

        const newPsychologyPost = new Psychology({
            title,
            text,
            imgUrl,
            popularity
        });

        await newPsychologyPost.save();

        return res.json({
            newPsychologyPost,
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