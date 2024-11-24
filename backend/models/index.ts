import { Sequelize } from "sequelize";
import StoreFactory from "./Store";
import TagFactory from "./Tag";
import StoreTagFactory from "./StoreTags";

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
 {
   host:process.env.DB_HOST || "localhost",
   dialect: "postgres",
 }
);

const Store = StoreFactory(sequelize);
const Tag = TagFactory(sequelize);
const StoreTag = StoreTagFactory(sequelize);

export { sequelize, Store, Tag, StoreTag };
