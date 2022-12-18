import React from "react";
import Classes from "./editprofile.module.css";
import { Button, Input } from "../../components/lib";

function EditProfile() {
  return (
    <div className={Classes.editprofile_container}>
      <div className={Classes.profile_container}>
        <img src="https://picsum.photos/323/223" alt="profile" />
        <Button rounded primary>
          Upload new picture
        </Button>

        <Button rounded>Delete</Button>
      </div>

      <div>
        <h4>General</h4>
        <label>Username</label>
        <Input />

        {/* <p>Your Ghotic URL: https://Ghotic.com/yonask</p> */}
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

      <div className={Classes.box_container}>
        <label>
          First Name
          <Input />
        </label>

        <label>
          Last Name
          <Input />
        </label>
      </div>
      <label>
        Bio
        <Input />
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
    </div>
  );
}

export default EditProfile;
