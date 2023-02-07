import React from "react";
import Classes from "./register.module.css";
import axios, { AxiosResponse } from "axios";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        password_confirm: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required("Required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
        password_confirm: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        axios
          .post(`${process.env.REACT_APP_REGISTER}`, {
            email: values.email,
            password: values.password,
            password_confirm: values.password_confirm,
          })
          .then((res: AxiosResponse) => console.log("**", res.data))
          .catch((error) => {
            console.error("XX", error.response.data);
          });
      }}
    >
      <div className={Classes.register_container}>
        <div className={Classes.form_container}>
          <img
            alt="a"
            src="https://images.unsplash.com/photo-1670366732948-00c4469673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Form>
            <h3>Register</h3>

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" id="email" />
            <ErrorMessage name="email"   />

            <label htmlFor="password">Password</label>
            <Field name="password" type="text" id="password" />
            <ErrorMessage name="password" />

            <label htmlFor="password_confirm">password Confirm</label>
            <Field name="password_confirm" type="text" id="password_confirm" />
            <ErrorMessage name="password_confirm" />

            <button className={Classes.login_btn}>Register</button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}

export default Register;
