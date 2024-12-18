"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5003;

// ミドルウェアの設定
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());

// ルートの設定
app.use('/auth', auth_1.default);
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました。`);
});
