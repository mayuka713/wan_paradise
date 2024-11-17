// routes/tags.ts
import { Router } from 'express';
import pool from '../db';

const router = Router();

// タグ一覧を取得するエンドポイント
router.get('/prefectures', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM prefectures');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching prefectures:', error);
    res.status(500).json({ error: '都道府県を取得できませんでした' });
  }

try {
  const result = await pool.query('SELECT * FROM tags');
  res.json(result.rows);
} catch (error) {
  console.error('Error fetching tags:', error);
  res.status(500).json({ error: 'タグを取得できませんでした' });
}
});



export default router;
