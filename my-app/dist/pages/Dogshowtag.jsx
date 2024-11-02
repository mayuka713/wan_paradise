import React, { useEffect, useState } from "react";
import "./DogRunNameTag.css";
var DogshowTag = function () {
    var _a = useState(false), showTag = _a[0], setShowTag = _a[1];
    useEffect(function () {
        // コンポーネントがマウントされたときにアニメーションを開始
        setTimeout(function () {
            setShowTag(true);
        }, 500);
    }, []);
    return (<div>
  <div className={"dogshowtag ".concat(showTag ? "show" : "")}>
 </div>
 </div>);
};
export default DogshowTag;
