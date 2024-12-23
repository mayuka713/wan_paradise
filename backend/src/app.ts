import express, { Request, Response } from 'express';
import pool from './db';  // データベース接続の設定
import cors from 'cors';
import storesRoutes  from './routes/stores';
const app = express();
app.use(cors());
app.use(express.json());// JSONを解析できるように設定

// ルートの設定
app.use('/stores', storesRoutes);

// サーバーを起動する
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



