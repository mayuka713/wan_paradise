"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
// ユーザー登録エンドポイント
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    try {
        // パスワードのハッシュ化
        const saltRounds = 10;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        // データベースにユーザー情報を保存
        const result = yield db_1.default.query('INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *', [email, name, hashedPassword]);
        res.status(201).json({
            message: 'ユーザーが登録されました。',
            user: {
                id: result.rows[0].id,
                email: result.rows[0].email,
                name: result.rows[0].name,
            },
        });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'ユーザー登録中にエラーが発生しました。' });
    }
}));
// ユーザーログインエンドポイント
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userQuery = yield db_1.default.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userQuery.rows.length === 0) {
            return res.status(401).json({ error: '無効なメールアドレスまたはパスワードです。' });
        }
        const user = userQuery.rows[0];
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
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
    }
    catch (err) {
        console.error('Error during user login:', err);
        res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
}));
exports.default = router;
