import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import 'dotenv/config';

mongoose.connect(String(process.env.MONGODB))
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    
    app.use(express.json());
    
    app.use(router);

    app.listen(3333, () => {
      console.log('🚀 Server is running on http://localhost:3333')
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'))
