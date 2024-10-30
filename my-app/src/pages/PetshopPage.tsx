import React from "react";
import "./PetshopPage.css";
import petshop from "../assets/images/petshop.png";
import petshopNationwide from "../assets/images/petshop.nationwide.png";

const PetshopPage: React.FC = () => {
  return (
    <div className="petshop-page">
     <h2 className="petshop-title">全国のペットショップを探す</h2>
     <div className="dogcafe-img">
      <img src={petshop} 
      alt="ペットショップのイラスト"
      className="petshop-illust" />
         <img src= {petshopNationwide}  alt="全国のドッグカフェの表示" 
      className="petshopNationwide"/>
     </div>
    </div>
  );
};
export default PetshopPage;