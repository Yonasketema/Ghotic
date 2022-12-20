import "./App.css";
import Login from "./page/Login/Login";
import ArtistProfile from "./page/ArtistProfile/ArtistProfile";
import ProductDetailView from "./page/ProductDetailView/ProductDetailView";
import ProductUpload from "./page/ProductUpload/ProductUpload";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import EditProfile from "./page/EditProfile/EditProfile";
import Register from "./page/Register/Register";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { tokenToString } from "typescript";

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
    () =>
      axios
        .get(`${process.env.REACT_APP_ME}`, {
          headers: {
            Authorization: `JWT ${jwttokens.access}`,
          },
        })
        .then((res) => res.data),
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
        <Route path="/" element={<Home />} />
        <Route path="/artistprofile" element={<ArtistProfile />} />
        <Route
          path="/upload"
          element={<ProductUpload token={jwttokens.access} />}
        />
        <Route path="/productdetailview/:id" element={<ProductDetailView />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
