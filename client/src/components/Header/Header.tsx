import React from "react";
import { Link } from "react-router-dom";
import Classes from "./header.module.css";
import { Button, FlexBox } from "../lib";
import { User } from "../../page/shared/types/User";

type HeaderProp = {
  User: User;
};

const Header: React.FC<HeaderProp> = ({ User }) => {
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
                <Link to={`/${User?.username}`}>
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
};

export default Header;
