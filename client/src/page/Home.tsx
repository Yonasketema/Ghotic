import React from "react";
import Card from "./../components/card/Card";
import SideBar from "./../components/sidebar/SideBar";
import Screen from "./../components/Screen";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  artist: {
    id: number;
    first_name: string;
    last_name: number;
    username: string;
    description: string;
    profile_pic: string | null;
  };
  category: number;
  description: string;
  images: string;
  likes: number;
};

const HomePage = () => {
  const { isLoading, error, data } = useQuery<Product[]>(["product"], () =>
    axios.get(`${process.env.REACT_APP_PRODUCTS}`).then((res) => res.data)
  );

  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <SideBar />
        <div>
          {/*<Screen/>*/}

          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            {data?.map((product) => (
              <Card key={product.id} Product={product} />
            ))}
          </div>
          <div style={{ height: "1rem" }}></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
