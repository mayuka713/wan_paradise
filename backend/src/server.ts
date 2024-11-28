import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth';
import session from 'express-session';
import storesRoutes from './routes/stores';
import prefectureRoutes from './routes/prefectures';
import tagsRouter from './routes/tags';
import storesTagsRouter from './routes/store-tags';
import exp from 'constants';
import path from 'path';
import tagsFacilityRouter from './routes/tags_facility';
import dogcafetagsRouter from './routes/dogcafe_tags';





dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

// ミドルウェアの設定
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // 許可するオリジンを指定
  credentials: true, // セッションやクッキーを共有する場合は true にする
}));

// セッションミドルウェアの設定
app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret_key', // セッションの秘密鍵
  resave: false,
  saveUninitialized: false,
}));

// ルートの設定
app.get('/', (req, res) => {
  res.send('サーバーは正常に動作しています。');
});

app.use('/auth', authRoutes);
app.use('/stores', storesRoutes);
app.use('/prefectures', prefectureRoutes);
app.use('/tags', tagsRouter);
app.use('/stores-tags', storesTagsRouter); //店舗とタグの紐付け管理
app.use('/tags_facility', tagsFacilityRouter);
app.use('/dog_cafe_tags', dogcafetagsRouter); 


app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました。`);
});

