import mongoose, { mongo } from 'mongoose';

import { app } from './app';

const start = async () => {
  console.log('Starting up!...');

  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('Connected to MongoDB');

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!');
  });
};

start();
