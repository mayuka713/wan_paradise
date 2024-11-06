import React from "react";
import { useParams } from "react-router-dom";
import "./KansaiDogRun.css";

const KansaiDogRunNames: { [key: string]: string } = {
  shiga: "滋賀",
  kyoto: "京都",
  osaka: "大阪",
  hyogo: "兵庫",
  nara: "奈良",
  wakawaya: "和歌山",
};

const KansaiDogRun: React.FC = () => {
  return (
    <div className="header">
      <head>wan paradise</head>
      <h2>関西のドッグランを選ぶ</h2>
      <ul>
        {Object.values(KansaiDogRunNames).map((name, index)=>(
        <li key={index}>{name}</li>
      ))}
      </ul>
    </div>
  );
};
export default KansaiDogRun;