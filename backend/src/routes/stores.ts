import { Router, Request, Response } from "express";
import pool from "../db"; // データベース接続を提供するファイル (例: db.ts)

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
    res.status(500).json({ error: "店舗情報を取得できませんでした" });
  }
});

// `prefectureID`に基づき店舗情報を取得するルート
router.get("/list/:prefectureID", async (req, res) => {
  const { prefectureID } = req.params;

  try {
    const query = `
  SELECT 
    stores.id AS store_id,
    stores.name AS store_name,
    stores.description AS store_description,
    stores.address AS store_address,
    stores.phone_number AS store_phone,
    stores.store_url AS store_url,
    stores.store_img AS store_img,
    tags.id AS tag_id,
    tags.name AS tag_name
  FROM stores
  LEFT JOIN "store-tags" ON stores.id = "store-tags".store_id
  LEFT JOIN tags ON "store-tags".tag_id = tags.id
  WHERE stores.prefecture_id = $1
  ORDER BY stores.id, tags.id;
    `;
  
    const result = await pool.query(query, [prefectureID]);
    if (result.rows.length === 0) {
       return res.status(404).json({ error:'該当する店舗情報が見つかりませんでした'})
    }
    // 結果をグループ化して整形
    const groupedStores = result.rows.reduce((acc: any[], row: any) => {
      const store = acc.find((s) => s.id === row.store_id);
      if (store) {
        store.tags.push({ id: row.tag_id, name: row.tag_name });
      } else {
        acc.push({
          id: row.store_id,
          name: row.store_name,
          description: row.store_description,
          address: row.store_address,
          phone: row.store_phone,
          url: row.store_url,
          tags: row.tag_id ? [{ id: row.tag_id, name: row.tag_name }] : [],
        });
      }
      return acc;
    }, []);

    res.json(groupedStores);
  } catch (error) {
    console.error("Error fetching stores by prefectureID:", error);
    res.status(500).json({ error: "店舗情報を取得できませんでした" });
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
        SELECT stores.*
        FROM stores
        JOIN "store-tags" ON stores.id = "store-tags".store_id
        WHERE "store-tags".tag_id = ANY($1::int[])
        GROUP BY stores.id
      `;
    const result = await pool.query(query, [tagIds]);
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
