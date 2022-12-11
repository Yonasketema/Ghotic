import "./App.css";

import Login from "./page/Login/Login";
import ArtistProfile from "./page/ArtistProfile/ArtistProfile";
import ProductDetailView from "./page/ProductDetailView/ProductDetailView";
import ProductUpload from "./page/ProductUpload/ProductUpload";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/Home";
function App() {
  return (
    <>
      
       
      
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistprofile" element={<ArtistProfile />} />
          <Route path="/upload" element={<ProductUpload />} />
          <Route path="/productdetailview" element={<ProductDetailView />} />
           
          <Route path="/login" element={<Login />} />


        <Route path="*" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;


