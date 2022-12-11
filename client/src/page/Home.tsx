import React from "react";
import Card from "./../components/card/Card";
import SideBar from "./../components/sidebar/SideBar";
import Screen from "./../components/Screen";

const HomePage = () => {
  return (
    <>
       

<div
className="App"
style={{
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between",
  gap: "1rem",
}}
>
<SideBar />
<div>
  {/*<Screen/>*/}

  <div
    className="App"
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: "1rem",
    }}
  >
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
  <div style={{ height: "1rem" }}></div>
  <div
    className="App"
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: "1rem",
    }}
  >
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>
</div> 
    </>
  );
};

export default HomePage;


