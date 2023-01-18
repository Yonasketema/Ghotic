import React from "react";
import axios, { AxiosResponse } from "axios";
import Classes from "./login.module.css";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    axios
      .post(`${process.env.REACT_APP_LOGIN}`, {
        email: email.value,
        password: password.value,
      })
      .then((res: AxiosResponse) => {
        console.log("**", res.data);
        window.localStorage.setItem("Ghotic_token", JSON.stringify(res.data));
        window.location.assign("/");
      })
      .catch((error) => {
        console.error("XX", error.response.data);
      });
  }

  return (
    <div className={Classes.login_container}>
      <div className={Classes.form_container}>
        <img
          alt="a"
          src="https://images.unsplash.com/photo-1670366732948-00c4469673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />

          <label htmlFor="password">Password</label>
          <input type="text" id="password" />

          <button className={Classes.login_btn}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
