import React from "react";
import "./DogCafePage.css";
import dogcafe from "../assets/images/dogcafe 2.png";
import dogcafeNationwide from "../assets/images/dogcafe.nationwide.png";

const DogcafePage: React.FC = () => {
  return (
    <div className="dogcafe-page">
     <h2 className="dogcafe-title">全国のドッグカフェを探す</h2>
     <div className="dogcafe-img">
      <img src={dogcafe} 
      alt="ドッグカフェのイラスト"
      className="dogcafe-illust" />
         <img src= {dogcafeNationwide}  alt="全国のドッグカフェの表示" 
      className="dogcafeNationwide"/>
     </div>
    </div>
  );
};
export default DogcafePage;
