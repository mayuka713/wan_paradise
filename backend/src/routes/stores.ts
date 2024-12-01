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

router.get("/list/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params;

  try {
    // クエリを構築
    const query = `
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

    // パラメータを設定
    const values = [prefectureId];

    // クエリを実行
    const result = await pool.query(query, values);

    // 結果が空の場合
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした" });
    }

    // 結果を返す
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching stores by prefectureId:", error);
    res.status(500).json({ message: "データの取得に失敗しました" });
  }
});


router.get("/list/tag/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params;
  const { tagIds } = req.query;

  if (!tagIds) {
    return res.status(400).json({ message: "タグIDを指定してください" });
  }

  try {
    const tagIdArray = (tagIds as string).split(",").map(Number);
    const query = `
      SELECT 
          stores.id AS store_id,
          stores.name AS store_name,
          stores.description AS store_description,
          stores.address AS store_address,
          stores.phone_number AS store_phone,
          stores.store_url AS store_url,
          stores.store_img AS store_img
      FROM stores
      JOIN stores_tags ON stores.id = stores_tags.store_id
      WHERE stores.prefecture_id = $1
        AND stores_tags.tag_id = ANY($2::int[])
      GROUP BY stores.id
      HAVING COUNT(DISTINCT stores_tags.tag_id) = $3;
    `;

    const values = [prefectureId, tagIdArray, tagIdArray.length];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした" });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching stores by tagIds:", error);
    res.status(500).json({ message: "データの取得に失敗しました" });
  }
});



export default router;
