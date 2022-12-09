import React from "react";
import Classes from "./artistProfile.module.css";

import SelfCard from "./../../components/SelfCard/SelfCard";
import Profile from "./../../components/profile/Profile";

function ArtistProfile() {
  return (
    <div className={Classes.artistprofile_container}>
      <Profile />
      <main>
        <div className={Classes.profile_subnav}>
          <ul>
            <li>
              Work <span>21</span>{" "}
            </li>
            <li>
              Liked Work <span>1,277</span>
            </li>
            <li>About</li>
          </ul>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SelfCard />
          <SelfCard />
          <SelfCard />
        </div>
      </main>
    </div>
  );
}

export default ArtistProfile;
