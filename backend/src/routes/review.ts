import { Router, Request, Response } from 'express';
import pool from '../db'; // データベース接続を提供するファイル

const router = Router();

// 型定義
interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

// 全てのレビューを取得
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query<Review>('SELECT * FROM reviews ORDER BY id');
    res.json(result.rows); // 全レビューをJSON形式で返す
  } catch (error) {
    console.error('レビューの取得中にエラーが発生しました:', error);
    res.status(500).json({ error: 'レビューの取得に失敗しました。' });
  }
}); 

// 特定の店舗のレビューを取得
router.get('/:store_id', async (req: Request, res: Response) => {
  const { store_id } = req.params;

  try {
    const result = await pool.query<Review>(
      'SELECT * FROM reviews WHERE store_id = $1',
      [parseInt(store_id, 10)] // store_id を数値に変換
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: '該当する店舗のレビューが見つかりませんでした。' });
    }

    res.json(result.rows); // 該当店舗のレビューをJSON形式で返す
  } catch (error) {
    console.error('特定店舗のレビューの取得中にエラーが発生しました:', error);
    res.status(500).json({ error: '特定店舗のレビューの取得に失敗しました。' });
  }
});

export default router;
