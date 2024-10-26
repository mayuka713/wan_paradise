import express from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';

const router = express.Router();

// ユーザー登録エンドポイント
router.post('/register', async (req, res) => {
  console.log('Received POST /register request');
  res.status(200).json({ message: 'ユーザー登録リクエストを受け取りました。' });
});

// ユーザーログインエンドポイント
router.post('/login', async (req, res) => {
  // ...ログイン処理のコード...
});

export default router; 

