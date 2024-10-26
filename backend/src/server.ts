import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

// ミドルウェアの設定
app.use(bodyParser.json());
app.use(cors());

// ルートの設定
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました。`);
});
