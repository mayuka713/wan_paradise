import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Wan Paradise</h1>
      <button className='menu-btn'>検索</button>
    </header>
  );
};

export default Header; // ここが重要です。デフォルトエクスポートを追加
