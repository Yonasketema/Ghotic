import axios from "axios";
import React from "react";
import { Button } from "../lib";

import Classes from "./../../page/Register/register.module.css";

function ProfileUploader(props: { token: string }) {
  function handleProfile_pic(event: any) {
    event.preventDefault();

    const { images } = event.target.elements;

    const formData = new FormData();

    formData.append("profile_pic", images.files[0]);

    axios
      .patch(
        `http://127.0.0.1:8001/gallery/profile_pic`,

        formData,
        {
          headers: {
            Authorization: `JWT ${props.token}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
  return (
    <form className={Classes.profile_container} onSubmit={handleProfile_pic}>
      <img src="https://picsum.photos/323/223" alt="profile" />
      <Button type="submit" rounded primary>
        Upload new picture
      </Button>
      <input
        // style={{ display: "none" }}
        type="file"
        accept="image/*"
        name="image-upload"
        id="images"
        // onChange={imageHandler}
      />
      <Button type="button" rounded>
        Delete
      </Button>
    </form>
  );
}

export default ProfileUploader;
