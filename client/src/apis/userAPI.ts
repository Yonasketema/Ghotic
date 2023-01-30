import { apiClient } from "./config/axiosConfig";

const artistProfileUrl = "/gallery/artist/";
const userArtistUrl = "/gallery/artists/me/";

type ProfileData = {
  first_name: string;
  last_name: string;
  username: string;
  description: string;
};

const userArtistProfile = (token?: string) => {
  return apiClient.get(userArtistUrl, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
};

const getArtistProfile = (artist_username?: string) => {
  return apiClient.get(`${artistProfileUrl}${artist_username}`);
};

const editArtistProfile = (data: ProfileData, token?: string) => {
  console.log("data", data);

  return apiClient.put(
    userArtistUrl,
    {
      ...data,
    },
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  );
};

export default {
  userArtistProfile,
  getArtistProfile,
  editArtistProfile,
};
