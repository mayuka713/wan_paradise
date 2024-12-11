import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Review = sequelize.define('Review', {
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true, // createdAt と updatedAt を自動的に管理
  });

  return Review;
};
