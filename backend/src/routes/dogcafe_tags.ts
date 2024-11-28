import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router ();

pool.query("SELECT 1", (err, res) => {
  if (err) {
    console.error("データベース接続に失敗しました:", err.message);
  } else {
    console.log(res.rows);
  }
});

router.get("/", async (req, res) => {
  try {
    const queryText = "SELECT * FROM dog_cafe_tags ORDER BY id";
    console.log("実行するクエリ:", queryText);
    const result = await pool.query(queryText);
    console.log("クエリ結果:", result.rows); // クエリ結果をログに出力
    res.json(result.rows);    
  } catch (error) {
    console.error("Error fetching dog_cafe_tags:", error);
    res.status(500).json({ error:"タグ情報を取得できませんでした"});
  }
});

export default router; 