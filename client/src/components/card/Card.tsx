import React from "react";

import Classes from "./card.module.css";

function Card() {
  return (
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

        <p>yonask</p>
      </div>
    </div>
  );
}

export default Card;
