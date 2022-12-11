import React from "react";

import Classes from "./card.module.css";
import { Link } from 'react-router-dom';

function Card() {
  return (
    <Link to="/productdetailview">
    <div className={Classes.card_container}>
      <div className={Classes.img_container}>
        <img src="https://picsum.photos/250/210" />
      </div>
      <h4>yonpia hidden world</h4>
      <div className={Classes.status_container}>
        <i className="fa fa-heart" aria-hidden="true"></i> <small>121</small>
      </div>

      <div className={Classes.pro_pic_container}>
        <img src="https://picsum.photos/323/223" />
       
       <Link to="artistprofile">
        <p>yonask</p>
        </Link>
      </div>
    </div>

    </Link>
  );
}

export default Card;
