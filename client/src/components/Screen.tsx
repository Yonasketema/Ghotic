import React from "react";

// import Classes from "./card.module.css";

function Screen() {
  return (
    <div
      style={{
        display: "flex",
        width: "70rem",
        height: "20rem",
      }}
    >
      <h1
        style={{
          position: "absolute",
          fontSize: "3rem",
        }}
      >
        Gothic
      </h1>
      <img
        style={{ width: "100%", borderRadius: "25px" }}
        src="https://picsum.photos/1240/900"
      />
    </div>
  );
}

export default Screen;
