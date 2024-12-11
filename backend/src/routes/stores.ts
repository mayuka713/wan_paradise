import { Router, Request, Response, query } from "express";
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
  opening_hours: string;
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

//特定の都道府県(prefectureId)と店舗タイプ(store_type)に基づいて店舗情報を取得
router.get("/list/store-type/:prefectureId/:store_type", async (req, res) => {
  const { prefectureId, store_type } = req.params;

  const parsedPrefectureId = parseInt(prefectureId, 10);
  const parsedStoreType = parseInt(store_type, 10);


  try {
    // クエリを構築
    const query = `
     SELECT 
    stores.id AS store_id,
    stores.name AS store_name,
    stores.description AS store_description,
    stores.address AS store_address,
    stores.phone_number AS store_phone_number,
    stores.store_url AS store_url,
    stores.store_img AS store_img,
    stores.opening_hours AS store_opening_hours
  FROM stores
  WHERE stores.prefecture_id = $1
  AND stores.store_type = $2;
    `;

    // パラメータを設定
    const values = [prefectureId, store_type];

    // クエリを実行
    const result = await pool.query(query, values);

    // 結果が空の場合
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした" });
    }

    // 結果を返す
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching stores by prefectureId and typeId:", error);
    res.status(500).json({ message: "データの取得に失敗しました" });
  }
});


//タグに基づく店舗情報の取得
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
          stores.phone_number AS store_phone_number,
          stores.store_url AS store_url,
          stores.store_img AS store_img,
          stores.opening_hours AS store_opening_hours,
          ARRAY_AGG(tags.name) AS tags
      FROM stores
      JOIN stores_tags ON stores.id = stores_tags.store_id
      JOIN tags ON stores_tags.tag_id = tags.id 
      WHERE stores.prefecture_id = $1
        AND stores_tags.tag_id = ANY($2::int[])
      GROUP BY 
          stores.id,
          stores.name,
          stores.description,
          stores.address,
          stores.phone_number,
          stores.store_url,
          stores.store_img,
          stores.opening_hours
    `;

    const values = [prefectureId, tagIdArray ];
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

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params; // パラメータからidを取得



  try {
    const query = `
      SELECT 
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description AS store_description,
        stores.address AS store_address,
        stores.phone_number AS store_phone_number,
        stores.store_url AS store_url,
        stores.store_img AS store_img,
        stores.opening_hours AS store_opening_hours,
        ARRAY_AGG(tags.name) AS tags
      FROM stores
      LEFT JOIN stores_tags ON stores.id = stores_tags.store_id
      LEFT JOIN tags ON stores_tags.tag_id = tags.id
      WHERE stores.id = $1
      GROUP BY stores.id;
    `;
    const result = await pool.query(query, [parseInt(id, 10)]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした。" });
    }

    res.status(200).json(result.rows[0]); // 店舗情報を返す
  } catch (error) {
    console.error("店舗情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});
export default router;