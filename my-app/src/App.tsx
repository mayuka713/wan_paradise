// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TopPage from "./pages/TopPage";
import DogRunPage  from "./pages/Dogrun/DogRunPage"; // ドッグランページのインポート
import DogcafePage from "./pages/Dogcafe/DogCafePage";
import OsakaDogCafe from "./pages/Dogcafe/OsakaDogCafe";
import PetshopPage from "./pages/Petshop/PetshopPage";
import HospitalPage from "./pages/Hospital/HospitalPage";
import KansaiDogCafe from "./pages/Dogcafe/KansaiDogCafe";
import KansaiDogRun from "./pages/Dogrun/KansaiDogRun";
// ドッグランのページ
import DogrunRegionList from "./pages/Dogrun/DogrunRegionList";
import TokyoDogRunPage from "./pages/Dogrun/TokyoDogRunPage";




const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ログインページ */}
          <Route path="/" element={<Login />} />
          {/* 登録ページ */}
          <Route path="/register" element ={<Register />} />
          {/* トップページ */}
          <Route path="/top" element={<TopPage />} />
         
          {/* ドッグランページ */}
          <Route path="/dogrun" element={<DogRunPage />} />
          <Route path="/DogrunRegionsList" element={<DogrunRegionList />}/>
          <Route path="/dogrun/tokyo" element ={<TokyoDogRunPage />}/>
         
          {/* ドッグカフェページ */}
          <Route path="/dogcafe" element={<DogcafePage />} />
          {/* 大阪ドッグカフェ */}
          <Route path="/dogcafe/osaka" element={<OsakaDogCafe />} />
                    {/* ペットショップページ */}
          <Route path="/petshop" element={<PetshopPage />} /> 
          {/* 病院ページ */}
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/dogcafe/kansai" element = {<KansaiDogCafe />} />
          <Route path="dogrun/kansai" element = {<KansaiDogRun />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;