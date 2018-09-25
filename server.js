import express from 'express';
import mongoose from 'mongoose';

import db from './config/keys'

import { users, profile, posts } from './routes/api'

const app = express();

//connect to MongoDB
mongoose
    .connect(db.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'));

//Use Routes
app.use('/api/users', users)
app.use('/api/users', () => users)
app.use('/api/users', () => users)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnig on port ${port}`))