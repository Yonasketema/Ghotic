import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Masonry from "@mui/lab/Masonry";

import Card from "../../components/Card/Card";
import SideBar from "../../components/Sidebar/SideBar";

import { Product } from "../shared/types/Product";
import productApi from "../../apis/productApi";
import Classes from "./home.module.css";
import useHandleLike from "../../hooks/handleLike";

const HomePage = (props: { token?: string ,userId?:number}) => {
  const handleLike = useHandleLike(props.token);

  const { isLoading, error, data } = useQuery<Product[]>(["product"], () =>
    productApi.getAllProduct().then((res) => res.data)
  );

  return (
    <>
      <div className={Classes.home_container}>
        <SideBar />

        <div className={Classes.home_masonry}>
          <Masonry columns={3} spacing={2}>
            {data?.map((product, i) => (
              <Card
                key={product.id}
                product={product}
                onPressLove={handleLike}
                token={props.token}
                userId={props.userId ?? 0}
              />
            )) ?? <></>}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default HomePage;
