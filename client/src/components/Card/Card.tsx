import React from "react";
import { Link } from "react-router-dom";

import Classes from "./card.module.css";
import { Product } from "../../page/shared/types/Product";

interface cardProp {
  product: Product;
  onPressLove: any;
}

const Card: React.FC<cardProp> = ({
  product: { id, images, title, likes_number, artist ,likes},
  onPressLove,
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
                  color: likes?.includes(1) ? "#fb3958" : "#9999",
                }}
              ></i>
            </Link>
            <small
              style={{
                fontSize: ".9rem",
                fontWeight: "500",
                marginLeft: ".3rem",
              }}
            >
              {likes_number}
            </small>
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
