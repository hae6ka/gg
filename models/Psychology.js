import mongoose from "mongoose";

const Psychology = new mongoose.Schema(
    {
        title: { type: String, required: true }, 
        text: { type: String, required: true },
        imgUrl: { type: String },
        popularity: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model('Psychology', Psychology)