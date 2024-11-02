import React from "react";
import { useParams } from "react-router-dom";


const kansaiDogCafeNames: { [key:string]: string} = {
   shiga: "滋賀",
   kyoto: "京都",
   osaka:  "大阪",
   hyogo: "兵庫",
   nara:  "奈良",
   wakawaya: "和歌山",
};

const KansaiDogCafe: React.FC = () => {
  return (
    <div className="header">
    <header>wan paradise</header>
    <h2>関西のドッグカフェを選ぶ</h2>
    <ul>
   {Object.values(kansaiDogCafeNames).map((name,index)=>(
    <li key={index}>{name}</li>
   ))}
      </ul>
    </div>
  );
};

export default KansaiDogCafe;