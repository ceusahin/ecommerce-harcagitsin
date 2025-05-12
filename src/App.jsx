import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <h1 className="text-center">?!?!?!?! DESIGNED FOR PHONE</h1>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
