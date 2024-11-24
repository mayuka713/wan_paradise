import { Sequelize, DataTypes, Model } from "sequelize";

export class StoreTag extends Model {
  public storeId!: number;
  public tagId!: number;
}

export default (sequelize: Sequelize) => {
  StoreTag.init(
    {
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "storeTag",
      tableName: "store_tags",
      timestamps: false,
    }
  );

  return StoreTag;
};
