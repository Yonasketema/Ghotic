import { useQuery } from "@tanstack/react-query";
import userAPI from "../apis/userAPI";

const useUser = (token?: string) => {
  return useQuery(
    ["user"],
    () => userAPI.userArtistProfile(token).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
};

export default useUser;
