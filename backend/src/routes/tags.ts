import { Router, Request, Response } from 'express';
import pool from '../db'; // データベース接続設定を提供するファイル

const router = Router();

// 型定義
interface Store {
  id: number;
  name: string;
  prefecture_id: number;
  createdAt: string;
  updatedAt: string;
}

interface Tag {
  id: number;
  name: string;
  tag_type: number;
  createdAt: string;
  updatedAt: string;
}

// 拡張したリクエスト型
interface PrefectureRequest extends Request {
  params: {
    prefectureId: string;
  };
}

// `/stores/list/:prefectureId` エンドポイント: 都道府県IDに基づいて店舗情報を取得
router.get('/list/tag/:prefectureId', async (req: PrefectureRequest, res: Response) => {
  const { prefectureId } = req.params;
  const {tagIds} = req.query;

  try {
    // `prefectureId` を条件に店舗情報を取得
    const stores = await pool.query<Store>(
      `SELECT id, name, description, address, store_url, store_img,prefecture_id FROM stores WHERE prefecture_id = $1`,
      [prefectureId]
    );

    if (stores.rows.length === 0) {
      return res.status(404).json({ error: '該当する店舗情報が見つかりませんでした' });
    }

    // 店舗データをJSON形式で返す
    res.json(stores.rows);
  } catch (error) {
    console.error('店舗データの取得に失敗しました:', error);
    res.status(500).json({ error: 'サーバーエラーが発生しました。' });
  }
});

// `/tags` エンドポイント: 全てのタグ情報を取得
router.get('/', async (req: Request, res: Response) => {
  try {
    // タグ情報を取得
    const result = await pool.query('SELECT * FROM tags ORDER BY id');
    res.json(result.rows) 
    //データーベースからtags tableで取得したデータをresに代入し、json形式で整形する。
  } catch (error) {
    console.error('タグ情報の取得に失敗しました:', error);
    res.status(500).json({ error: 'タグ情報を取得できませんでした' });
  }
});








export default router;
