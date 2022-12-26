import React from "react";
import Card from "./../components/card/Card";
import SideBar from "./../components/sidebar/SideBar";
import Screen from "./../components/Screen";
import { useQuery ,useMutation,useQueryClient} from "@tanstack/react-query";
import axios from "axios";

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

const HomePage = (props: { token?: string }) => {
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery<Product[]>(["product"], () =>
    axios.get(`${process.env.REACT_APP_PRODUCTS}`).then((res) => res.data)
  );

  const handleLike = useMutation((product_id) =>
    axios.post(`http://127.0.0.1:8001/gallery/like`, product_id,
    {
          headers: {
            Authorization: `JWT ${props.token}`,
          },
    }),{
      onSuccess: () => {
        
        queryClient.invalidateQueries(['product'])
      },
    }
  )


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
               
              display: "Grid",
               gridTemplateColumns: "repeat(3, 1fr)",
               gridAutoFlow:"dense",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            {data?.map((product , i) => (
              <Card key={product.id} Product={product} onPressLove={handleLike} />
            ))}
          </div>
          <div style={{ height: "1rem" }}></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
