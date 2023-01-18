import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Masonry from "@mui/lab/Masonry";
import axios from "axios";
import Card from "../../components/Card/Card";
import SideBar from "../../components/Sidebar/SideBar";

import { Product } from "../shared/types/Product";
import productApi from "../../apis/productApi";

const HomePage = (props: { token?: string }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery<Product[]>(["product"], () =>
    productApi.getAllProduct().then((res) => res.data)
  );

  const handleLike = useMutation(
    (product_id) =>
      axios.post(`http://127.0.0.1:8001/gallery/like`, product_id, {
        headers: {
          Authorization: `JWT ${props.token}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product"]);
      },
    }
  );

  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        {/*<SideBar />*/}

        <div
          style={{
            flex: "2",
          }}
        >
          <Masonry columns={3} spacing={2}>
            {data?.map((product, i) => (
              <Card
                key={product.id}
                product={product}
                onPressLove={handleLike}
              />
            )) ?? <></>}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default HomePage;
