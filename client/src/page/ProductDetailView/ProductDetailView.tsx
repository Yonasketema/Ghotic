import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Classes from "./productdetail.module.css";
import SelfCard from "./../../components/SelfCard/SelfCard";
import { Product } from "../shared/types/Product";

function ProductDetailview() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Product>(["product", id], () =>
    axios.get(`${process.env.REACT_APP_PRODUCTS}${id}`).then((res) => res.data)
  );

  //////////////////// isLoading ....isError
  return (
    <div className={Classes.productdetail_container}>
      <div className={Classes.artistprofile}>
        {/*<Profile/>*/}
        <div className={Classes.profile}>
          <img
            alt="a"
            src={data?.artist.profile_pic ?? "https://picsum.photos/323/223"}
          />

          <div>
            <h4>{data?.title}</h4>
            <p>{data?.artist.username}</p>
          </div>
        </div>
        <button>
          <i className="fa-regular fa-heart"></i>{" "}
          <small>{data?.likes_number}</small>
        </button>
      </div>

      <main className={Classes.product_main}>
        <img className={Classes.product_image} src={data?.images} />

        <p>{data?.description}</p>
      </main>

      <section className={Classes.more}>
        <div className={Classes.more_nav}>
          <p>More by Artist</p>
          <a href="#">View Profile</a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <SelfCard />

          <SelfCard />
          <SelfCard />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailview;
