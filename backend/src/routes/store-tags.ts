// routes/tags.ts
import { Router } from 'express';
import pool from '../db';

const router = Router();

// タグ一覧を取得するエンドポイント
router.get('/stores', async (req, res) => {
  try {
    const PrefectureRequest = await pool.query('SELECT * FROM prefectures');
    const tagsResult = await pool.query('SELECT * FROM tags');

    res.json({
      prefectures: PrefectureRequest.rows,
      tags: tagsResult.rows
    });
  }  catch (error) { 
  console.error('Error fetching tags:', error);
  res.status(500).json({ error: 'タグを取得できませんでした' });
}
});



export default router;
