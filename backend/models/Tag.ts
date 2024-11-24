import { Sequelize, DataTypes, Model } from "sequelize";

export class Tag extends Model {
  public id!: number;
  public name!: string;
}

export default (sequelize: Sequelize) => {
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tag",
      tableName: "tags",
      timestamps: false,
    }
  );
  return Tag;
};
