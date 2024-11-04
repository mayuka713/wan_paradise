import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../db';


const router = express.Router();

// ユーザー登録エンドポイント
router.post('/register', async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  try {
    // パスワードのハッシュ化
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // データベースにユーザー情報を保存
    const result = await pool.query(
      'INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *',
      [email, name, hashedPassword]
    );

    res.status(201).json({
      message: 'ユーザーが登録されました。',
      user: {
        id: result.rows[0].id,
        email: result.rows[0].email,
        name: result.rows[0].name,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'ユーザー登録中にエラーが発生しました。' });
  }
});

// ユーザーログインエンドポイント
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userQuery.rows.length === 0) {
      return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
    }

    const user = userQuery.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
    }

    // セッションにユーザー情報を保存
    req.session.userId = user.id;

    res.status(200).json({
      message: 'ログイン成功',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error('Error during user login:', err);
    res.status(500).json({ error: 'サーバーエラーが発生しました。' });
  }
});

export default router; 

