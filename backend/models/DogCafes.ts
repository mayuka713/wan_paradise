import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

class DogCafes extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public phone_number!: string;
  public store_url!: string;
  public store_img!: string;
  public description!: string;
  public reference?: string; // 任意のカラムはオプショナルに設定
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
  DogCafes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'DogCafes',
      tableName: 'DogCafes',
      timestamps: true,
    }
  );

  return DogCafes;
};
