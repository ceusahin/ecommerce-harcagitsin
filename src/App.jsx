import "./App.css";
import EditorPicks from "./layouts/EditorPicks";
import Header from "./layouts/header";
import Hero from "./layouts/Hero";
import BestSellerProducts from "./layouts/BestSellerProducts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <EditorPicks />
      <BestSellerProducts />
    </>
  );
}

export default App;
