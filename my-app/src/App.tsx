
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TopPage from "./pages/TopPage";
import FavoritePage from "./pages/FavoritePage";
import { FavoriteProvider } from "./context/FavoriteContext";
import HamburgerMenu from "./HamburgerMenu";


// ドッグランのページ
import DogRunPage from "./pages/Dogrun/DogRunPage";
import DogrunRegionList from "./pages/Dogrun/DogrunRegionList";
import StoresList from "./components/StoresList";
import DogRunStoreList from "./pages/Dogrun/DogRunStoreList";
import DogRunDetail from "./pages/Dogrun/DogRunDetail";
import DogRunReview from "./pages/Dogrun/DogRunReview";

// ドッグカフェのページ
import DogcafePage from "./pages/Dogcafe/DogCafePage";
import DogCafeRegionList from "./pages/Dogcafe/DogCafeRegionList";
import DogCafeStoreList from "./pages/Dogcafe/DogCafeStoreList";
import DogCafeDetail from "./pages/Dogcafe/DogCafeDetail";

// ペットショップのページ
import PetshopPage from "./pages/Petshop/PetShopPage";
import PetShopRegionList from "./pages/Petshop/PetshopRegionList";
import PetShopStoreList from "./pages/Petshop/PetShopStoreList";
import PetShopDetail from "./pages/Petshop/PetShopDetail";

// 病院のページ
import HospitalPage from "./pages/Hospital/HospitalPage";
import HospitalRegionList from "./pages/Hospital/HospitalRegionList";
import HospitalStoreList from "./pages/Hospital/HospitalStoreList";
import HospitalDetail from "./pages/Hospital/HospitalDetail";

const App: React.FC = () => {
  return (
    <FavoriteProvider>
    <Router>
        <HamburgerMenu />
        <div className="App">
          <Routes>
            {/* ログインページ */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* トップページ */}
            <Route path="/top" element={<TopPage />} />
            <Route path="/favorites" element={<FavoritePage />} />

            {/* ドッグランページ */}
            <Route path="/dogrun" element={<DogRunPage />} />
            <Route path="/DogrunRegionsList" element={<DogrunRegionList />} />
            <Route path="/dogrun/:prefectureId" element={<DogRunStoreList />} />
            <Route path="/dogrun/detail/:id" element={<DogRunDetail />} />
            <Route path="/dogrun/reviews/:storeId" element={<DogRunReview />} />

            {/* ドッグカフェページ */}
            <Route path="/dogcafe" element={<DogcafePage />} />
            <Route path="/DogCafeRegionList" element={<DogCafeRegionList />} />
            <Route path="/dogcafe/:prefectureId" element={<DogCafeStoreList />} />
            <Route path="/dogcafe/detail/:id" element={<DogCafeDetail />} />

            {/* ペットショップページ */}
            <Route path="/petshop" element={<PetshopPage />} />
            <Route path="/petshopregionsList" element={<PetShopRegionList />} />
            <Route path="/petshop/:prefectureId" element={<PetShopStoreList />} />
            <Route path="/petshop/detail/:id" element={<PetShopDetail />} />

            {/* 病院ページ */}
            <Route path="/hospital" element={<HospitalPage />} />
            <Route path="/hospitalregionsList" element={<HospitalRegionList />} />
            <Route path="/hospital/:prefectureId" element={<HospitalStoreList />} />
            <Route path="/hospital/detail/:id" element={<HospitalDetail />} />

            {/* その他 */}
            <Route path="/components/StoreList" element={<StoresList />} />
            <Route path="/store/:storeId" element={<DogRunReview />} />
            
          </Routes>
        </div>
      </Router>
    </FavoriteProvider>
  );
};

export default App;
