import React from "react";
import Classes from "./selfcard.module.css";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../page/shared/types/User";

type selfProduct = {
  id: number;
  title: string;
  images: string;
  onPressLove: any;
  likes: number[];
};

function SelfCard({ id, title, images, onPressLove, likes }: selfProduct) {
  const { data } = useQuery<User>(["user"]);

  return (
    <div className={Classes.selfcard_container}>
      <img src={images} />
      <div className={Classes.selfcard_status}>
        <p>{title}</p>
        <button>
          <i
            className="fa fa-heart"
            aria-hidden="true"
            onClick={() => onPressLove.mutate({ product_id: id })}
            style={{
              color: likes?.includes(data ? data.id : 0) ? "#fb3958" : "#9999",
            }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default SelfCard;
