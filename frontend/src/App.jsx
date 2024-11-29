import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductsPage from "./pages/products";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <ProductCard
        image="https://via.placeholder.com/150"
        title="Sample Product"
        price="49.99"
      />
      <Router>
        <Routes>
          <Route path={"collections/all"} element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}
