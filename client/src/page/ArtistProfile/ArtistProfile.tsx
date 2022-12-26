import React from "react";
import Classes from "./artistProfile.module.css";

import { useQuery ,useMutation,useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

import SelfCard from "./../../components/SelfCard/SelfCard";
import Profile from "./../../components/profile/Profile";


type Product = {
  id: number;
  title: string;
  artist: {
    id: number;
    first_name: string;
    last_name: number;
    username: string;
    description: string;
    profile_pic: string | null;
  };
  category: number;
  description: string;
  images: string;
  likes: number[];
  likes_number:number;
};



function ArtistProfile() {

  const { artist_username } = useParams();


    const { isLoading, error, data } = useQuery<Product[]>(["artist",artist_username], () =>
    axios.get(`http://127.0.0.1:8001/gallery/artist/${artist_username}`).then((res) => res.data)
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

        <div 
        style={{
               
              display: "Grid",
               gridTemplateColumns: "repeat(3, 1fr)",
               gridAutoFlow:"dense",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}>
          {data?.map((product , i) => (
              <SelfCard 
              key={product.id}  
              // onPressLove={handleLike} 
              id={product.id}
              title={product.title}
              images={product.images}
              
              />
            ))}
        
        </div>
      </main>
    </div>
  );
}

export default ArtistProfile;
