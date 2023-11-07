import mongoose from "mongoose";

const SelfDevelopmentSchema = new mongoose.Schema(
    {
        title: { type: String, required: true }, 
        text: { type: String, required: true },
        imgUrl: { type: String },
        popularity: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model('SelfDevelopment', SelfDevelopmentSchema)