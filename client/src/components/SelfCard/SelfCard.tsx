import React from "react";
import Classes from "./selfcard.module.css";


type selfProduct = {
  id: number;
  title: string;
  images: string;
  // onPressLove:any
};


function SelfCard({id,title,images}:selfProduct) {
  return (
    <div className={Classes.selfcard_container}>
      <img src={images}/>
      <div className={Classes.selfcard_status}>
        <p>{title}</p>
        <button>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default SelfCard;
