import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Classes from "./card.module.css";
import { Product } from "../../page/shared/types/Product";
import { User } from "../../page/shared/types/User";
import useUser from "../../hooks/user";

interface cardProp {
  product: Product;
  onPressLove: any;
  token?:string;
  userId:number;
}

const Card: React.FC<cardProp> = ({
  product: { id, images, title, likes_number, artist, likes },
  onPressLove,
  userId,
}) => {
  

   

  return (
    <Link to={`/productdetailview/${id}`}>
      <div className={Classes.card_container}>
        <div className={Classes.img_container}>
          <img src={images} />
        </div>
        <div className={Classes.status_container}>
          <h4>{title}</h4>

          <div>
            <Link to="">
              <i
                className="fa fa-heart"
                aria-hidden="true"
                onClick={() => onPressLove.mutate({ product_id: id })}
                style={{
                  color: likes?.includes(userId)
                    ? "#fb3958"
                    : "#9999",
                }}
              ></i>
            </Link>
            <small className={Classes.likes_number}>{likes_number}</small>
          </div>
        </div>

        <div className={Classes.pro_pic_container}>
          <img src={artist.profile_pic ?? "https://picsum.photos/323/223"} />

          <Link to={`/${artist.username}`}>
            <p>{artist.username}</p>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
