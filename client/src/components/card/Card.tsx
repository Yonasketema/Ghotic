import React from "react";

import Classes from "./card.module.css";
import { Link } from "react-router-dom";

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

function Card({ Product }: { Product: Product }) {
  return (
    <Link to={`/productdetailview/${Product.id}`}>
      <div className={Classes.card_container}>
        <div className={Classes.img_container}>
          <img src={Product.images} />
        </div>
        <div className={Classes.status_container}>
          <h4>{Product.title}</h4>

          <i className="fa fa-heart" aria-hidden="true">
            <small style={{marginLeft:".3rem"}}>{Product.likes}</small>
          </i>
        </div>

        <div className={Classes.pro_pic_container}>
          <img
            src={Product.artist.profile_pic ?? "https://picsum.photos/323/223"}
          />

          <Link to="artistprofile">
            <p>{Product.artist.username}</p>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Card;
