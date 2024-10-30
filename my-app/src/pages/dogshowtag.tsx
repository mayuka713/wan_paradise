import React, { useEffect, useState } from "react";
import "./DogRunNameTag.css";

const DogshowTag: React.FC = () => {
  const [showTag, setShowTag] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされたときにアニメーションを開始
    setTimeout(() => {
      setShowTag(true);
    },500);
    
  }, []); 


return (
  <div>
  <div className={`dogshowtag ${showTag? "show" : ""}`}>
 </div>
 </div>
);
};

export default DogshowTag;