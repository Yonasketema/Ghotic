import React from "react";
import Classes from "./login.module.css";

function Login() {
  return (
    <div className={Classes.login_container}>
      <div className={Classes.form_container}>
        <img
          alt="a"
          src="https://images.unsplash.com/photo-1670366732948-00c4469673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <form>
          <h3>Register</h3>
          <label htmlFor="Email">Email</label>
          <input />
          <label htmlFor="Password">Password</label>
          <input />
          <label htmlFor="username">username</label>
          <input />
          <label htmlFor="pc">passwordConfirm</label>
          <input />
          <button className={Classes.login_btn}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
