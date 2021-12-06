import "./App.css";
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import SinglePage from "./pages/SinglePage";
import "semantic-ui-css/semantic.min.css";
import CartPage from "./pages/CartPage";
import AdminPanel from "./admin/components/AdminPanel";
import Adminlogin from "./admin/components/Adminlogin";
import Category from "./admin//components/Category";
import AdminProducts from "./admin//components/Products";
import SingleProduct from "./admin//components/SingleProduct";
import AddProducts from "./admin//components/AddProducts";
import UserSignup from "./admin/components/UserSignup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SinglePage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* =======================admin================================ */}

          <Route path="/login" element={<Adminlogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin/product/:id" element={<SingleProduct />} />
          <Route path="/admin/addProducts/:id" element={<AddProducts />} />
          <Route path="/admin/category" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
