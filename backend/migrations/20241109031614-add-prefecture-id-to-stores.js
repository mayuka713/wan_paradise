//、Sequelizeを使用したデータベースマイグレーションファイルで、stores テーブルに新しいカラム（列）を追加したり削除したりする処理を記述しています。

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('stores', 'prefecture_id',  {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'prefectures',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  
  await queryInterface.addColumn('stores','tags', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'tags', // list-tags テーブルを参照  
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });
},

  async down(queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('stores', 'prefecture_id',);
    await queryInterface.removeColumn('stores', 'tags',);
  }
};



const handleSubmit = async () => {
  const storeData = {
    name: "新しいお店",
    address: "東京都新宿区",
    phone: "0123-456-789",
  };

  const response = await fetch("http://localhost:5003/stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeData),
  });

  const result = await response.json();
  console.log(result.message); // ユーザーに結果を表示する
};
