import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import productApi from "../apis/productApi";


const useHandleLike = (token?: string,artist_username?:string) => {

  const queryClient = useQueryClient();
   

  const handleLike = useMutation(
    (product_id) => productApi.likeProduct(product_id, token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product"]);
        queryClient.invalidateQueries(["artist",`${artist_username}`]);
   
      },
    }
  );

  return handleLike;
};

export default useHandleLike;
