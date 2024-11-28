import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router ();

// データベース接続のテスト
pool.query("SELECT 1", (err, res) => {
  if (err) {
    console.error("データベース接続に失敗しました:", err.message);
  } else {
    console.log(res.rows);
  }
});
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tags_facility ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching tags_facility:", error);
    res.status(500).json({ error: "設備タグ情報を取得できませんでした" });
  }
});


export default router;