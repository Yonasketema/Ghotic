import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import EditProfile from "./page/EditProfile/EditProfile";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import ArtistProfile from "./page/ArtistProfile/ArtistProfile";
import ProductDetailView from "./page/ProductDetailView/ProductDetailView";
import ProductUpload from "./page/ProductUpload/ProductUpload";
import Header from "./components/Header/Header";
import UserAPI from "./apis/userAPI";
import "./App.css";

type token = {
  access?: string;
  refresh?: string;
};

function App() {
  let [localToken] = React.useState(() =>
    window.localStorage.getItem("Ghotic_token")
  );

  let jwttokens: token = {};

  if (localToken) {
    jwttokens = JSON.parse(localToken);
  }

  const { isLoading, error, data } = useQuery(
    ["user"],
    () => UserAPI.userArtistProfile(jwttokens.access).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Header User={data} />
      <Routes>
        <Route path="/" element={<Home token={jwttokens.access} />} />
        <Route path="/:artist_username" element={<ArtistProfile />} />
        <Route
          path="/upload"
          element={<ProductUpload token={jwttokens.access} />}
        />
        <Route path="/productdetailview/:id" element={<ProductDetailView />} />
        <Route
          path="/editprofile"
          element={<EditProfile token={jwttokens.access} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
