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
  likes: number[];
  likes_number:number;
};

function Card({ Product,onPressLove }: { Product: Product ,onPressLove:any }) {
  return (
    <Link to={`/productdetailview/${Product.id}`}>
      <div className={Classes.card_container} >
        <div className={Classes.img_container}>
          <img src={Product.images} />
        </div>
        <div className={Classes.status_container}>
          <h4>{Product.title}</h4>

        <div>
           <Link to="">
           <i className="fa fa-heart" aria-hidden="true" 
           onClick={()=>onPressLove.mutate({"product_id":Product.id})}
           style={{color: Product?.likes?.includes(1) ? "#fb3958" :"#9999"}}
           >
           
          </i>
        </Link>
           <small style={{ fontSize: ".9rem",fontWeight:"500",marginLeft:".3rem"  }}>{Product.likes_number}</small>
        </div>
        </div>

        <div className={Classes.pro_pic_container}>
          <img
            src={Product.artist.profile_pic ?? "https://picsum.photos/323/223"}
          />

          <Link to={`/${Product.artist.username}`}>
            <p>{Product.artist.username}</p>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Card;
