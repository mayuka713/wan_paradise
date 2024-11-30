import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router();

interface Tag {
  id: number;
  name: string;
}

interface Store {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  url: string;
  tags: Tag[];
}

// `/stores`エンドポイントで全ての店舗情報を取得するルート
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM stores"); // storesテーブルの全データを取得
    res.json(result.rows); // 結果をJSON形式で返す
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ error: "該当する店舗情報が見つかりませんでした" });
  }
});

// `prefectureID`に基づき店舗情報を取得するルート
router.get("/list/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params;
  try {
    let query = `
      SELECT 
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description AS store_description,
        stores.address AS store_address,
        stores.phone_number AS store_phone,
        stores.store_url AS store_url,
        stores.store_img AS store_img
      FROM stores
      WHERE stores.prefecture_id = $1
    `;
    const values: (string | number)[] = [prefectureId];
    // クエリを実行
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした" });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetch store with filters:", error);
    res.status(500).json({ message: "データの取得に失敗しました" });
  }
});


// タグに基づき店舗情報を取得するルート
router.get("/tags", async (req, res) => {
  const { tags } = req.query;
  if (!tags) {
    return res.status(400).json({ error: "タグIDを指定してください" });
  }
  const tagIds = (tags as string).split(",").map(Number);

  try {
    const query = `
        SELECT stores.*, tags.name 
        FROM stores
      `;
      const result = await pool.query(query, [tagIds]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: "該当する店舗情報が見つかりませんでした" });
      }
  
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching stores by tag IDs:", error);
      res.status(500).json({ error: "タグ情報を取得できませんでした" });
    }
  });


// 全タグ情報を取得するルート
router.get("/all-tags", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tags ORDER BY id");
    res.json(result.rows);

  } catch (error) {
    console.error("Error fetching all tags:", error);
    res.status(500).json({ error: "タグ情報を取得できませんでした" });
  }
});

export default router;
