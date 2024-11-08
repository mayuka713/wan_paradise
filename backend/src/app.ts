import express, { Request, Response } from 'express';
import pool from './db';  // データベース接続の設定
import cors from 'cors';
import storeRoutes from './routes/stores';
import tagRoutes from './routes/tags';

const app = express();
app.use(cors());
app.use(express.json());// JSONを解析できるように設定

// ルートの設定
app.use('/stores', storeRoutes);
app.use('/tags',tagRoutes);

// サーバーを起動する
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



