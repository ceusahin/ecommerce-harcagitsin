import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
