import React from "react";
import Classes from "./selfcard.module.css";

function SelfCard() {
  return (
    <div className={Classes.selfcard_container}>
      <img src="https://picsum.photos/390/350" />
      <div className={Classes.selfcard_status}>
        <p>title of the year</p>
        <button>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default SelfCard;
