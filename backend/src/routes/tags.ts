import { Router, Request, Response } from 'express';
import pool from '../db'; // データベース接続を提供するファイル

const router = Router();

interface PrefectureRequest extends Request {
  params: {
    prefectureId: string;
  };
}

// `/stores/list/:prefectureId`エンドポイントで、`prefectureId`に基づく店舗情報を取得
router.get('/stores/list/:prefectureId', async (req: PrefectureRequest, res: Response) => {
  const { prefectureId } = req.params;

  try {
    // データベースから `prefectureId` に基づいて店舗データを取得する
    const stores = await pool.query
    ('SELECT * FROM stores WHERE prefecture_id = $1', [prefectureId]);

    // 取得した店舗データを返す
    if (stores.rows.length === 0) {
      return res.status(404).json({ error: '該当する店舗情報が見つかりませんでした' });
    }

    res.json(stores.rows);
  } catch (error) {
    console.error("店舗データの取得に失敗しました:", error);
    res.status(500).json({ error: "サーバーエラーが発生しました。" });
  }
});

// `/tags`エンドポイントで全てのタグ情報を取得
router.get('/tags', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tags');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching all tags:', error);
    res.status(500).json({ error: 'タグ情報を取得できませんでした' });
  }
});

export default router;
