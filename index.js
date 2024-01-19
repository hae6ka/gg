import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';

// import route from './routes/route.js';
import routeSelfDevelopment from './routes/routeSelfDevelopment.js';
import routePhilosophy from './routes/routePhilosophy.js';
import routePsychology from './routes/routePsychology.js';

const app = express();
dotenv.config();


app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api/selfdevelopment', routeSelfDevelopment);
app.use('/api/philosophy', routePhilosophy);
app.use('/api/psychology', routePsychology);


async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ckp.9lccvqy.mongodb.net/`
        );


        app.listen(process.env.PORT || 3002, () => {
            console.log(`listen on ${ process.env.PORT || 3002 } port`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();