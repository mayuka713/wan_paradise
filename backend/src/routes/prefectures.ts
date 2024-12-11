import { Router, Request , Response } from 'express';
import pool  from '../db'; // データベース接続を提供するファイル (例: db.ts)

const router = Router();

// `/prefectures`エンドポイントで全ての都道府県情報を取得するルート
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM prefectures'); // prefecturesテーブルの全データを取得
    res.json(result.rows); // 結果をJSON形式で返す
  } catch (error) {
    console.error('Error fetching prefectures:', error);
    res.status(500).json({ error: '都道府県情報を取得できませんでした' });
  }
});

export default router;
