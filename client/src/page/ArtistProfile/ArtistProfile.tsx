import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Classes from "./artistProfile.module.css";
import SelfCard from "./../../components/SelfCard/SelfCard";
import Profile from "../../components/Profile/Profile";
import { Product } from "../shared/types/Product";
import userAPI from "../../apis/userAPI";
import useHandleLike from "../../hooks/handleLike";

function ArtistProfile(props: { token?: string }) {
  const { artist_username } = useParams();

  const handleLike = useHandleLike(props.token,artist_username);

  const { isLoading, error, data } = useQuery<Product[]>(
    ["artist", artist_username],
    () => userAPI.getArtistProfile(artist_username).then((res) => res.data)
  );

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

        <div className={Classes.artistworks_contanier}>
          {data?.map((product, i) => (
            <SelfCard
              key={product.id}
              onPressLove={handleLike}
              id={product.id}
              title={product.title}
              images={product.images}
              likes={product.likes}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ArtistProfile;
