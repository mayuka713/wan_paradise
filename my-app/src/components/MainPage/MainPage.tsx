import React from "react";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <main>
      <p>色んなわんこに関わる情報をご紹介しております。</p>
      <div className='map'>
        <div className='info-point' id='hospital'>
          <span>動物病院</span>
        </div>
        <div className='info-point' id='petshop'>
          <span>ペットショップ</span>
        </div>
        <div className='info-point' id='dogcafe'>
          <span>ドッグカフェ</span>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
