import { Router, Request, Response } from "express";
import pool from "../db";



const router = Router();

interface dog_cafe_tags {
  id: number;
  name: string;
}


interface dogcafes {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  url: string;
  tags: dog_cafe_tags[];
}

router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM DogCafes");
    res.json(result.rows);
  } catch (error) {
    console.error("サーバー内部でエラーが発生しました:", error);
    res.status(500).json({ error: "サーバー内部で問題が発生しました" });
  }
});


router.get("/list/:prefectureId", async (req, res) => {
  const { prefectureId } = req.params; //URLに入っている情報を取り出す
  const { tagId } = req.query; //URLの追加条件を取り出す

  try {
    let query = `
    SELECT 
      dogcafes.id AS dogcafes_id,
      dogcafes.name AS dogcafes_name,
      dogcafes.description AS dogcafes_description,
      dogcafes.address AS dogcafes_address,
      dogcafes.phone_number AS dogcafes_phone,
      dogcafes.store_url AS dogcafes_url,
      dogcafes.store_img AS dogcafes_img
    FROM DogCafes
    JOIN dog_cafe_tags ON DogCafes.id = dog_cafe_tags.dogcafe_id
    WHERE dogcafes.prefecture_id = $1`;

    const values: (string | number)[] = [prefectureId];


    if (tagId) {
      query += `AND tags.id = $${values.length + 1}`;
      values.push(Number(tagId));
    }
    //クエリを実行
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
router.get("/dogcafetags", async (req, res) => {
  const { tags } = req.query;
  if (!tags) {
    return res.status(400).json({ error: "タグIDを指定してください" });
  }
  const tagIds = (tags as string).split(",").map(Number);

  try {
    const query = `
        SELECT 
        dogcafes.*,
        dog_cafe_tags.*
      FROM dog_cafes
      JOIN dog_cafe_tags ON dogcafes.id = dog_cafe_tags.dogcafe_id
      JOIN dog_cafe_tags ON store_tags.tag_id = dog_cafe_tags.id
      WHERE dog_cafe_tags.id = ANY($1::int[])
      GROUP BY dogcafes.id, dog_cafe_tags.id
      `;
    const result = await pool.query(query, [tagIds]);
    res.json(result.rows);

  } catch (error) {
    console.error("タグに基づく店舗情報の取得中にエラーが発生しました:", error);
    res.status(500).json({ error: "タグ情報を取得できませんでした" });
  }
});



export default router;









