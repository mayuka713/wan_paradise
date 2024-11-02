import React from "react";
var kansaiDogCafeNames = {
    shiga: "滋賀",
    kyoto: "京都",
    osaka: "大阪",
    hyogo: "兵庫",
    nara: "奈良",
    wakawaya: "和歌山",
};
var KansaiDogCafe = function () {
    return (<div className="header">
    <header>wan paradise</header>
    <h2>関西のドッグカフェを選ぶ</h2>
    <ul>
   {Object.values(kansaiDogCafeNames).map(function (name, index) { return (<li key={index}>{name}</li>); })}
      </ul>
    </div>);
};
export default KansaiDogCafe;
