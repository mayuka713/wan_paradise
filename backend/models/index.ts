import { Sequelize } from "sequelize";
import StoreFactory from "./Store";
import TagFactory from "./Tag";
import StoreTagFactory from "./StoreTags";


//自分のデーターベースにログインする
const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false, // コンソールにSQLログを出力しない
  }
);

sequelize
  .authenticate()
  .then(() => console.log("データベースに接続成功"))
  .catch((error) => console.error("データベース接続エラー:", error));

const Store = StoreFactory(sequelize);
const Tag = TagFactory(sequelize);
const StoreTag = StoreTagFactory(sequelize);

export { sequelize, Store, Tag, StoreTag,  };
