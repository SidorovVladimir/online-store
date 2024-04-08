import 'dotenv/config';
import express from 'express';

import sequelize from './db.js';
import cors from 'cors';

import { User, Basket, BasketDevice, Device, Rating, DeviceInfo, Type, Brand, TypeBrand } from './models/models.js';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

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

