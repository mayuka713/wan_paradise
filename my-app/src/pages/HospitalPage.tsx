import React from "react";
import "./HospitalPage.css";
import hospital from "../assets/images/hospital.png";
import hospitalNationwide from "../assets/images/hospital.nationwide.png";

const HospitalPage: React.FC = () => {
  return (
    <div className="hospital-page">
     <h2 className="hospital-title">全国の病院を探す</h2>
     <div className="hospital-img">
      <img src={hospital} 
      alt="病院のイラスト"
      className="hospital-illust" />
         <img src= {hospitalNationwide}  alt="全国の病院の表示" 
      className="hospitalNationwide"/>
     </div>
    </div>
  );
};
export default HospitalPage;