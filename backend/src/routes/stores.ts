import { Router, Request, Response } from 'express';
import pool from '../db'; // データベース接続を提供するファイル (例: db.ts)

const router = Router();

// `/stores`エンドポイントで全ての店舗情報を取得するルート
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stores'); // storesテーブルの全データを取得
    res.json(result.rows); // 結果をJSON形式で返す
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ error: '店舗情報を取得できませんでした' });
  }
});

// `prefectureID`に基づき店舗情報を取得するルート
router.get('/list/:prefectureID', async (req, res) => {
  const { prefectureID } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM stores WHERE prefecture_id = $1', // 都道府県IDに基づくクエリ
      [prefectureID]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: '該当する店舗情報が見つかりませんでした' });
    }

    res.json(result.rows); // 結果をJSON形式で返す
  } catch (error) {
    console.error('Error fetching stores by prefectureID:', error);
    res.status(500).json({ error: '店舗情報を取得できませんでした' });
  }
});

// `tagID` に基づきタグ情報を取得するルート
router.get('/stores', async (req, res) => {

const { tags } = req.query;
if(!tags) {
  return res.status(400).json({ error: 'タグIDを指定してください'});
}
const tagIds = (tags as string).split('.').map(Number);

try {
  const query = `
  SELECT stores.*
  FROM stores
  JOIN "store-tags" ON stores.id = "store-tags".store_id
  WHERE "store-tags".tag_id = ANY($1::int[])
  GROUP BY stores.id
`;
const result = await pool.query(query, [tagIds]);
res.json(result.rows);
} catch (error) {
console.error('Error fetching stores by tag IDs:', error);
res.status(500).json({ error: 'タグ情報を取得できませんでした' });
}
});

// 全タグ情報を取得するルート
router.get('/tags', async (req, res) => {
try {
const result = await pool.query('SELECT * FROM tags');
res.json(result.rows);
} catch (error) {
console.error('Error fetching all tags:', error);
res.status(500).json({ error: 'タグ情報を取得できませんでした' });
}
});

export default router;
