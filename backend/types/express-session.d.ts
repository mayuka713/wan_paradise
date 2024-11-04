import 'express-session';

declare module 'express-session' {
    interface SessionData {
    userId: number;
    // 他にセッションに保存したいデータがあればここに追加
    }
}