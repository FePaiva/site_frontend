import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Home from "./components/home";
import ProductPage from "./components/productPage";
import Sobre from "./components/sobre";
import FaleConosco from "./components/faleConosco";
import OndeEstamos from "./components/ondeEstamos";
import Missing from "./components/missing";
import Footer from "./components/footer";
import productsApi from "./api/productsApi";
import Login from "./components/login";

import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const API_URL = "http://localhost:3000/api/v1/products";

function getAPIData() {
  return axios.get(API_URL).then((res) => res.data);
}
function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setProducts(items);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav user={user} setUser={setUser} />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} />}
          />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/onde-estamos" element={<OndeEstamos />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
