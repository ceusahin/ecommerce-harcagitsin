import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
