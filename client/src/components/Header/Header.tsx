import React from "react";
import Classes from "./header.module.css";
import { Button, FlexBox } from "../lib";
import styled from "styled-components";

import { Link } from "react-router-dom";

type User = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  description?: string;
  profile_pic?: string | null;
};

type HeaderProp = {
  User: User;
};

function Header({ User }: HeaderProp) {
  function logout() {
    window.localStorage.removeItem("Ghotic_token");
    window.location.assign("/");
  }

  return (
    <header className={Classes.header_container}>
      <nav className={Classes.header_nav}>
        <Link to="/">Gothic</Link>

        <div>Home</div>
        <div>About</div>
      </nav>

      <div>
        {User ? (
          <div className={Classes.profile_dropdown}>
            <div className={Classes.profile_img}>
              <img src="https://picsum.photos/323/223" />
              <small>{User?.username}</small>
              <div className={Classes.profile_subnav}>
                <Link to="/artistprofile">
                  <p>Profile</p>{" "}
                </Link>
                <Link to="/editprofile">
                  {" "}
                  <p>Edit Profile</p>
                </Link>
                <p>
                  <i className="fa fa-heart" aria-hidden="true"></i> My Like
                </p>
                <p onClick={logout}>Sign out</p>
              </div>
            </div>

            <Link to="/upload">
              <Button primary rounded>
                Upload
              </Button>
            </Link>
          </div>
        ) : (
          <FlexBox>
            <Link to="/register">
              <Button primary>Register</Button>
            </Link>
            <Link to="/login">
              <Button primary>Login</Button>
            </Link>
          </FlexBox>
        )}
      </div>
    </header>
  );
}

export default Header;
