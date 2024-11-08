import { Router } from 'express';
import pool from '../db'; // データベース接続の設定

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stores');
    res.json(result.rows);
  } catch (error) {
  console.error('Error fetching stores', error);
  res.status(500).json({ error: '店舗を取得できませんでした'});
  }
});

export default router;