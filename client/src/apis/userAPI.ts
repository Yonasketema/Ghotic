import { apiClient } from "./config/axiosConfig";

const artistProfileUrl = "/gallery/artist/";
const getUserUrl = "/gallery/artists/me/";

const UserArtistProfile = (token?: string) => {
  return apiClient.get(getUserUrl, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
};

const getArtistProfile = (artist_username?: string) => {
  return apiClient.get(`${artistProfileUrl}${artist_username}`);
};

export default {
  UserArtistProfile,
  getArtistProfile,
};
