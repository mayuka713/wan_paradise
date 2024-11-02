var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState } from "react";
import "./Register.css";
function Register() {
    var _this = this;
    // フォームデータの状態を管理する
    var _a = useState(""), name = _a[0], setName = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var _d = useState(""), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var _e = useState(""), errorMessage = _e[0], setErrorMessage = _e[1];
    // フォーム送信時の処理
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault(); // ページのリロードを防ぐ
                    // パスワードと確認パスワードの検証
                    if (password !== confirmPassword) {
                        setErrorMessage("パスワードが一致しません。");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:5003/auth/register", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ name: name, email: email, password: password }),
                        })];
                case 2:
                    response = _a.sent();
                    if (response.ok) {
                        console.log("登録が完了しました");
                    }
                    else {
                        setErrorMessage("登録に失敗しました。");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setErrorMessage("サーバーエラーが発生しました。");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="register-container">
      <header className="register">
        <h1>wan paradise</h1>
        <h2>新規会員登録</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">名前</label>
            <input type="text" id="name" name="name" placeholder="名前" value={name} onChange={function (e) { return setName(e.target.value); }} required aria-label="名前"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name="email" placeholder="メールアドレス" value={email} onChange={function (e) { return setEmail(e.target.value); }} required aria-label="メールアドレス"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" placeholder="パスワード" value={password} onChange={function (e) { return setPassword(e.target.value); }} required aria-label="パスワード"/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">パスワード確認</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="パスワードを再入力" value={confirmPassword} onChange={function (e) { return setConfirmPassword(e.target.value); }} required aria-label="パスワード確認"/>
          </div>
          <button type="submit">登録</button>
        </form>
        {errorMessage && (<p id="errorMessage" style={{ color: "red" }}>
            {errorMessage}
          </p>)}
      </header>
    </div>);
}
export default Register;
