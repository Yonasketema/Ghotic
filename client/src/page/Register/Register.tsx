import React from "react";
import Classes from "./register.module.css";
import axios, { AxiosResponse } from "axios";

interface UserNameError {
  password?: string[] | null;
  username?: {
    username?: string[];
    email?: string[];
  };
  email?: string[];
}

function Register() {
  const [usernameError, setUsernameError] = React.useState<UserNameError>({});

  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, username, password, password_confirm } =
      event.target.elements;

    axios
      .post(`${process.env.REACT_APP_REGISTER}`, {
        email: email.value,
        username: username.value,
        password: password.value,
        password_confirm: password_confirm.value,
      })
      .then((res: AxiosResponse) => console.log("**", res.data))
      .catch((error) => {
        console.error("XX", error.response.data);
        const errors: UserNameError = error.response.data;
        if (errors.password) {
          setUsernameError({ password: errors.password });
        } else if (errors.username) {
          setUsernameError({ username: errors.username });
        }
        if (errors.email) {
          setUsernameError({ email: errors.email });
        }
      });
  }

  console.log("++++", usernameError);
  return (
    <div className={Classes.login_container}>
      <div className={Classes.form_container}>
        <img
          alt="a"
          src="https://images.unsplash.com/photo-1670366732948-00c4469673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />

          <label
            htmlFor="password"
            onChange={() => setUsernameError({ password: null })}
          >
            Password
          </label>
          <input type="text" id="password" />

          <label htmlFor="username">username</label>
          <input type="text" id="username" />

          <label
            htmlFor="password_confirm"
            onChange={() => setUsernameError({ password: undefined })}
          >
            password Confirm
          </label>
          {usernameError.password?.map((error) => (
            <small>{error}</small>
          ))}
          <input type="text" id="password_confirm" />

          <button className={Classes.login_btn}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
