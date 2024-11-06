import React from "react";
import { useNavigate } from "react-router-dom";

const DogrunRegionList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = ( path: string ) => {
    navigate(path);
  };

  return (
    <div>
      <h2>DogRunを探す</h2>
      <div>
        <h3>北海道</h3>
        <h3>東北</h3>
        <p>青森・岩手・宮城・秋田・山形・福島</p>    
        <h3>関東</h3>
        <p>茨城・栃木・群馬・埼玉・千葉・ <span onClick={() => handleClick('/dogrun/tokyo')} style={{ cursor: 'pointer', color: 'green' }}>
        東京
        </span>・神奈川</p>
       
        <h3>北陸</h3>
        <p>新潟県・富山・石川・福井</p>
        <h3>中部</h3>
        <p>岐阜・静岡・愛知・三重</p>
        <h3>近畿</h3>
        <p>滋賀・京都・大阪・兵庫・奈良・和歌山</p>
        <h3>中国</h3>
        <p>鳥取・島根・岡山・広島・山口</p>
        <h3>四国</h3>
        <p>徳島・香川・愛媛・高知</p>
        <h3>九州</h3>
        <p>福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島</p>
        <h3>沖縄</h3>
      </div>
    </div>
  );
};

export default DogrunRegionList;