// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TopPage from "./pages/TopPage";

// ドッグランのページ
import DogRunPage from "./pages/Dogrun/DogRunPage"; // ドッグランページのインポート
import DogrunRegionList from "./pages/Dogrun/DogrunRegionList";
import StoresList from "./components/StoresList";
import DogRunStoreList from "./pages/Dogrun/DogRunStoreList";
import DogRunDetail  from "./pages/Dogrun/DogRunDetail";
import ReviewList from "./pages/Dogrun//DogRunReview";


//ドッグカフェのページ
import DogcafePage from "./pages/Dogcafe/DogCafePage";
import DogCafeRegionList from "./pages/Dogcafe/DogCafeRegionList";
import DogCafeStoreList from "./pages/Dogcafe/DogCafeStoreList";
import DogCafeDetail  from "./pages/Dogcafe/DogCafeDetail";

//ペットショップのページ
import PetshopPage from "./pages/Petshop/PetShopPage";
import PetShopRegionList from "./pages/Petshop/PetShopRegionList";
import PetShopStoreList from "./pages/Petshop/PetShopStoreList";
import PetShopDetail from "./pages/Petshop/PetShopDetail";

//病院のページ

import HospitalPage from "./pages/Hospital/HospitalPage";
import HospitalRegionList from "./pages/Hospital/HospitalRegionList";
import HospitalStoreList from "./pages/Hospital/HospitalStoreList";
import HospitalDetail from "./pages/Hospital/HospitalDetail";


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
          <Route path="/dogrun/detail/:id" element = { <DogRunDetail />} /> 
          <Route path="/dogrun/reviews/:storeId" element = {<ReviewList/>} />
          {/* ドッグカフェページ */}   
          <Route path="/dogcafe" element={<DogcafePage />} />
          <Route path="/DogCafeRegionList" element={<DogCafeRegionList />} />
          <Route path="/dogcafe/:prefectureId" element={<DogCafeStoreList />}/>
          <Route path="/dogcafe/detail/:id" element = {<DogCafeDetail/>} />
          {/* ペットショップページ */}
          <Route path="/petshop" element={<PetshopPage />} />
          <Route path="/petshopregionsList" element={<PetShopRegionList />} />
          <Route path="/petshop/:prefectureId" element={<PetShopStoreList />} />
          <Route path="/petshop/detail/:id" element = {<PetShopDetail/>} />
          {/* 病院ページ */}
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/hospitalregionsList" element={<HospitalRegionList />} />
          <Route path="/hospital/:prefectureId" element={<HospitalStoreList />}/>
          <Route path="/hospital/detail/:id" element = {<HospitalDetail/>} />


          <Route path="/components/StoreList" element={<StoresList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
