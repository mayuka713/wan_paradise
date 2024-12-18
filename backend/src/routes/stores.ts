import { Router, Request, Response } from "express";
import pool from "../db";
import cors from "cors";

const router = Router();

// 店舗名を取得するエンドポイント
router.get("/store-name/:store_id", async (req, res) => {
  const { store_id } = req.params;

  try {
    const query = `
      SELECT name AS store_name
      FROM stores
      WHERE id = $1
    `;
    const result = await pool.query(query, [parseInt(store_id, 10)]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗が見つかりませんでした。" });
    }

    res.status(200).json({ store_name: result.rows[0].store_name });
  } catch (error) {
    console.error("店舗名の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

// 都道府県ごとの店舗情報を取得
router.get("/list/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params;

  try {
    const query = `
      SELECT id AS store_id, name AS store_name, description AS store_description, address AS store_address, 
             phone_number AS store_phone_number, store_url, store_img, opening_hours AS store_opening_hours
      FROM stores
      WHERE prefecture_id = $1 AND store_type = 1
    `;
    const result = await pool.query(query, [parseInt(prefectureId, 10)]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗が見つかりませんでした。" });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("店舗情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

// タグに基づく店舗情報を取得
router.get("/list/tag/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params;
  const { tagIds } = req.query;

  if (!tagIds) {
    return res.status(400).json({ message: "タグIDを指定してください。" });
  }

  let tagIdArray: number[];
  try {
    tagIdArray = (tagIds as string).split(",").map(Number);
  } catch (error) {
    console.error("タグIDのパース中にエラーが発生しました:", error);
    return res.status(400).json({ message: "無効なタグIDが指定されました。" });
  }

  console.log("リクエストパラメータ:", { prefectureId, tagIdArray });

  try {
    const query = `
      SELECT 
        stores.id AS store_id, 
        stores.name AS store_name, 
        stores.description AS store_description,
        stores.address AS store_address, 
        stores.phone_number AS store_phone_number,
        stores.store_url, 
        stores.store_img, 
        stores.opening_hours AS store_opening_hours
      FROM stores
      JOIN stores_tags ON stores.id = stores_tags.store_id
      WHERE stores.prefecture_id = $1 
        AND stores.store_type = 1
        AND stores_tags.tag_id = ANY($2::int[])
      GROUP BY stores.id;
    `;
    const result = await pool.query(query, [parseInt(prefectureId, 10), tagIdArray]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした。" });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("タグに基づく店舗情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});


// 店舗の詳細情報を取得
router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT 
        stores.id AS store_id,
        stores.name AS store_name,
        stores.description AS store_description,
        stores.address AS store_address,
        stores.phone_number AS store_phone_number,
        stores.store_url,
        stores.store_img,
        stores.opening_hours AS store_opening_hours,
        ARRAY_AGG(tags.name) AS tags
      FROM stores
      LEFT JOIN stores_tags ON stores.id = stores_tags.store_id
      LEFT JOIN tags ON stores_tags.tag_id = tags.id
      WHERE stores.id = $1
      GROUP BY stores.id
    `;
    const result = await pool.query(query, [parseInt(id, 10)]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "該当する店舗情報が見つかりませんでした。" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("店舗詳細情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
});

export default router;
