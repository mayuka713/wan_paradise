import { Sequelize, DataTypes, Model } from "sequelize";

export class Store extends Model {
  public id! : number;
  public name! : string;
  public description?: string;
}

export default (sequelize: Sequelize) => {
  Store.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
   {
    sequelize,
    modelName: "Store",
   }
  );
return Store;
};