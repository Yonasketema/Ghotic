import React from "react";
import Classes from "./profile.module.css";
 

function Profile() {
  return (
    <div className={Classes.container}>
        <div className={Classes.profile_container}>
        <img src="https://picsum.photos/323/223" alt="profile" />
        <div className={Classes.artist_profile}>
          <h2>yonask</h2>
          <p>HCMC, VN</p>
          <p>Brand / Graphic Design, Illustration</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
