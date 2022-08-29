import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';
import ProductPage from './components/productPage';
import Sobre from './components/sobre';
import FaleConosco from './components/faleConosco';
import OndeEstamos from './components/ondeEstamos';
import Missing from './components/missing';
import Footer from './components/footer';
import productsApi from './api/productsApi'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


const API_URL = "http://localhost:3000/api/v1/products"

function getAPIData() {
  return axios.get(API_URL).then((res) => res.data)
}
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setProducts(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
        <Header />
        <Nav />
        <Routes> 
        <Route path="/"
                element={<Home />} 
        />
        <Route path="/sobre"
                element={<Sobre />} 
        />
        <Route path="/product/:id" 
                element={<ProductPage products={products}/>}
        />
        <Route path="/fale-conosco"  
                element={<FaleConosco />} 
        />
        <Route path="/onde-estamos"
                element={<OndeEstamos />}
        />
        <Route path="*" 
                element={<Missing />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
