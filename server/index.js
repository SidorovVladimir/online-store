import 'dotenv/config';
import express from 'express';

import sequelize from './db.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';
import path from 'node:path';

import { User, Basket, BasketDevice, Device, Rating, DeviceInfo, Type, Brand, TypeBrand } from './models/models.js';
import router from './routes/index.js';

import errorHandler from './middleware/ErrorHandlingMiddleware.js';

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()

    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });

  } catch(e) {
    console.log('Errors started DateBase');
    console.log(e);
  }
};

start();

