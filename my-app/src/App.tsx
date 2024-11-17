// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TopPage from "./pages/TopPage";
import DogRunPage from "./pages/Dogrun/DogRunPage"; // ドッグランページのインポート
import DogcafePage from "./pages/Dogcafe/DogCafePage";
import PetshopPage from "./pages/Petshop/PetShopPage";
import HospitalPage from "./pages/Hospital/HospitalPage";

// ドッグランのページ
import DogrunRegionList from "./pages/Dogrun/DogrunRegionList";
import StoresList from "./components/StoresList";
import DogRunStoreList from "./pages/Dogrun/DogRunStoreList";

//ドッグカフェのページ
import DogCafeRegionList from "./pages/Dogcafe/DogCafeRegionList";
import DogCafeStoreList from "./pages/Dogcafe/DogCafeStoreList";

//ペットショップのページ
import PetShopRegionList from "./pages/Petshop/PetShopRegionList";
import PetShopStoreList from "./pages/Petshop/PetShopStoreList";

//病院のページ
import HospitalRegionList from "./pages/Hospital/HospitalRegionList";
import HospitalStoreList from "./pages/Hospital/HospitalStoreList";

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
          <Route path="/dogrun/:prefectureId" element={<DogRunStoreList />} />
          {/* ドッグカフェページ */}
          <Route path="/dogcafe" element={<DogcafePage />} />
          <Route path="/DogCafeRegionList" element={<DogCafeRegionList />} />
          <Route
            path="/dogcafe/:prefectureId"
            element={<DogCafeRegionList />}
          />

          {/* ペットショップページ */}
          <Route path="/petshop" element={<PetshopPage />} />
          <Route path="/petshopregionsList" element={<PetShopRegionList />} />
          <Route path="/pet/:prefectureId" element={<PetShopStoreList />} />
          {/* 病院ページ */}
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/hospitalregionsList" element={<HospitalRegionList />} />
          <Route
            path="/hospital/:prefectureId"
            element={<HospitalStoreList />}
          />

          <Route path="/components/StoreList" element={<StoresList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
