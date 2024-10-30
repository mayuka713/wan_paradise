// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import "./App.css";
import TopPage from "./pages/TopPage";
import {DogRunPage, DogRunDetailPage } from "./pages/DogRunPage"; // ドッグランページのインポート
import DogcafePage from "./pages/DogCafePage";
import PetshopPage from "./pages/PetshopPage";
import HospitalPage from "./pages/HospitalPage";



const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* トップページ */}
          <Route path="/" element={<TopPage />} />
          {/* ドッグランページ */}
          <Route path="/dogrun" element={<DogRunPage />} />
          {/* ドッグカフェページ */}
          <Route path="/dogcafe" element={<DogcafePage />} />
          {/* ペットショップページ */}
          <Route path="/petshop" element={<PetshopPage />} />
          {/* 病院ページ */}
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/dogrun/:prefecture" element={<DogRunDetailPage />} />{/* 都道府県別のページ */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
