import React from "react";
import Classes from "./header.module.css";
import {Button} from '../lib'
import styled from "styled-components";


import { Link } from "react-router-dom";


function Header() {
  return (
    <header className={Classes.header_container}>
     <nav className={Classes.header_nav}>
        <div>Gothic</div>

        <div>Home</div>
        <div>About</div>
      </nav>

      <div>
        {true ? (
          <div className={Classes.profile_dropdown}>
            <div className={Classes.profile_img}>
              <img
                src="https://picsum.photos/323/223"
              />
               <div className={Classes.profile_subnav}>
                <Link to='/artistprofile'><p>Profile</p> </Link>
                <p>Edit Profile</p>
                <p><i className="fa fa-heart" aria-hidden="true"></i>  My Like</p>
                <p>Sign out</p>
              </div>

            </div>

            <Link to="/upload">
               <Button primary rounded >Upload</Button>
            </Link>
            

          </div>
        ) : (
          <div>
           <Button primary  >Sign up</Button>
           <Button primary  >Login</Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
