import React from "react";
import Classes from "./register.module.css";

function Register() {
  return (
    <div className={Classes.login_container}>
      <div className={Classes.form_container}>
        <img
          alt="a"
          src="https://images.unsplash.com/photo-1670366732948-00c4469673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <form>
          <h3>Register</h3>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />

          <label htmlFor="password">Password</label>
          <input type="text" id="password" />

          <label htmlFor="username">username</label>
          <input type="text" id="username" />

          <label htmlFor="password_confirm">password Confirm</label>
          <input type="text" id="password_confirm" />

          <button className={Classes.login_btn}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
