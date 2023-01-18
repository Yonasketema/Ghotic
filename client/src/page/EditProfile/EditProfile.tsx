import React from "react";
import axios, { AxiosResponse } from "axios";
import Classes from "./editprofile.module.css";
import { Button, Input } from "../../components/lib";

function EditProfile(props: { token?: string }) {
  function handleProfile(event: any) {
    event.preventDefault();
    const { first_name, last_name, username, description } =
      event.target.elements;

    console.log(first_name.value, username.value);

    axios
      .put(
        `${process.env.REACT_APP_ME}`,
        {
          first_name: first_name.value,
          last_name: last_name.value,
          username: username.value,
          description: description.value,
        },
        {
          headers: {
            Authorization: `JWT ${props.token}`,
          },
        }
      )
      .then((res: AxiosResponse) => {
        console.log("**", res.data);
      })
      .catch((error) => {
        console.error("XX", error.response.data);
      });
  }

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
    <div className={Classes.editprofile_container}>
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

      <div>
        <h4>General</h4>
        <label>Email</label>

        <Input />
      </div>

      <div className={Classes.box_container}>
        <label>
          Old password
          <Input type="password" />
        </label>

        <label>
          Password
          <Input type="password" />
        </label>
      </div>
      <Button rounded primary>
        Change
      </Button>

      <h4>Profiles</h4>

      <form onSubmit={handleProfile}>
        <label>Username</label>
        <Input id="username" />
        {/* <p>Your Ghotic URL: https://Ghotic.com/yonask</p> */}

        <div className={Classes.box_container}>
          <label>
            First Name
            <Input id="first_name" />
          </label>

          <label>
            Last Name
            <Input id="last_name" />
          </label>
        </div>
        <label>
          Bio
          <Input id="description" />
        </label>
        <h4>Social Profiles</h4>
        <label>
          Twitter
          <Input />
        </label>

        <label>
          Facebook
          <Input />
        </label>

        <label>
          Instagram
          <Input />
        </label>

        <Button rounded primary>
          Update Profile
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;
