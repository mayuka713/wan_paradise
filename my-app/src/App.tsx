// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TopPage from "./pages/TopPage";
import DogRunPage from "./pages/Dogrun/DogRunPage"; // ドッグランページのインポート
import DogcafePage from "./pages/Dogcafe/DogCafePage";
import OsakaDogCafe from "./pages/Dogcafe/OsakaDogCafe";
import PetshopPage from "./pages/Petshop/PetshopPage";
import HospitalPage from "./pages/Hospital/HospitalPage";
// ドッグランのページ
import DogrunRegionList from "./pages/Dogrun/DogrunRegionList";
import StoresList from "./components/StoresList";

interface StoresList {
  id: number;
  name: string;
  location: string;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ログインページ */}
          <Route path="/" element={<Login />} />
          {/* 登録ページ */}
          <Route path="/register" element={<Register />} />
          {/* トップページ */}
          <Route path="/top" element={<TopPage />} />
          {/* ドッグランページ */}
          <Route path="/dogrun" element={<DogRunPage />} />
          <Route path="/DogrunRegionsList" element={<DogrunRegionList />} />
          {/* ドッグカフェページ */}
          <Route path="/dogcafe" element={<DogcafePage />} />
          {/* 大阪ドッグカフェ */}
          <Route path="/dogcafe/osaka" element={<OsakaDogCafe />} />
          {/* ペットショップページ */}
          <Route path="/petshop" element={<PetshopPage />} />
          {/* 病院ページ */}
          <Route path="/hospital" element={<HospitalPage />} />
        
          <Route path="/components/StoreList" element={<StoresList/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;