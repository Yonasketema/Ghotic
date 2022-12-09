import React from "react";
import Classes from "./productdetail.module.css";
import Profile from "./../../components/profile/Profile";
import SelfCard from "./../../components/SelfCard/SelfCard";

function ProductDetailview() {
  return (
    <div className={Classes.productdetail_container}>
      <div className={Classes.artistprofile}>
        {/*<Profile/>*/}
        <div className={Classes.profile}>
          <img alt="a" src="https://picsum.photos/1280/720 " />

          <div>
            <h4>Social Media Marketing Agency Website Template Design</h4>
            <p>Artist</p>
          </div>
        </div>
        <button>
          <i className="fa-regular fa-heart"></i> <small>121</small>
        </button>
      </div>

      <main className={Classes.product_main}>
        <img
          className={Classes.product_image}
          src="https://picsum.photos/1280/720 "
        />

        <p>
          Hi, friends! I continue working on a design concept for Web Header -
          Landing Page. Take a look at the Web design of this awesome service!
          Hope you enjoy it!
        </p>
      </main>

      <section className={Classes.more}>
        <div className={Classes.more_nav}>
          <p>More by Artist</p>
          <a href="#">View Profile</a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <SelfCard />

          <SelfCard />
          <SelfCard />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailview;
