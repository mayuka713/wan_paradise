import React from "react";
import "./App.css";
import dogrun from "./assets/images/dogrun.png";
import dogcafe from "./assets/images/dogcafe.png";
import petshop from "./assets/images/petshop.png";
import hospital from "./assets/images/hospital.png";
import dogrunNameTag from "./assets/images/dogrun-nametag.png";
import dogCafeNameTag from "./assets/images/dogcafe-nametag.png";
import petshopNameTag from "./assets/images/petshop-nametag.png";
import hospitalNameTag from "./assets/images/hospital-nametag.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wan Paradise</h1>
      </header>
      {/* top */}
      <div className="container">
        <p className="main-title">色んなわんこに関わる情報をご紹介しております。</p>
        {/* dogrun */}
        <div className="info-section">
          <div className="text-container">
            <img src={dogrunNameTag} alt="ドッグランネームタグ" className="dogrun-nametag" />
          </div>
          <div className="image-container">
            <img src={dogrun} alt="ドッグランのイラスト" className="dogrun-image" />
          </div>
        </div>
        {/* dogcafe */}
        <div className="info-section reverse">
          <div className="text-container">
            <img src={dogCafeNameTag} alt="ドッグカフェネームタグ" className="dogcafe-nametag" />
          </div>
          <div className="image-container">
            <img src={dogcafe} alt="ドッグカフェイラスト" className="dogcafe-image" />
          </div>
        </div>
        {/* petshop */}
        <div className="info-section">
          <div className="text-container">
            <img src={petshopNameTag} alt="ペットショップネームタグ" className="petshop-nametag" />
          </div>
          <div className="image-container">
            <img src={petshop} alt="ペットショップのイラスト" className="petshop-image" />
          </div>
        </div>
        {/* hospital */}
        <div className="info-section reverse">
          <div className="text-container">
            <img src={hospitalNameTag} alt="病院ネームタグ" className="hospital-nametag" />
          </div>
          <div className="image-container">
            <img src={hospital} alt="病院のイラスト" className="hospital-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
