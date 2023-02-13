import React from "react";
import axios, { AxiosResponse } from "axios";
import Classes from "./editprofile.module.css";
import { Button, Input } from "../../components/lib";

import { useQuery } from "@tanstack/react-query";
import userAPI from "../../apis/userAPI";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

function EditProfile(props: { token?: string }) {
  const { data } = useQuery(["user"]); 

  const [username, setUserName] = React.useState(data.username);

  function handleProfile(event: any) {
    event.preventDefault();

    const { first_name, last_name, username, description } =
      event.target.elements;
  }

  return (
    <Formik
      initialValues={{
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        description: data.description,
      }}
      // validationSchema={Yup.object({})}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        userAPI
          .editArtistProfile(
            {
              first_name: values.first_name,
              last_name: values.last_name,
              username: values.username,
              description: values.description,
            },
            props.token
          )
          .then((res: AxiosResponse) => {
            toast.success("You have successfully updated your profile.");
          })
          .catch((error) => {
            console.error("XX", error.response.data);
            toast.error("post deleted ");
          });
      }}
    >
      <div className={Classes.editprofile_container}>
        <ToastContainer />
        <h4>Profiles</h4>

        <Form className={Classes.editprofile_form}>
          <label>Username</label>

          <Field name="username" id="username" type="text" />

          <p className={Classes.profile_url}>
            Your Ghotic URL: https://Ghotic.com/{username}
          </p>

          <div className={Classes.box_container}>
            <label>
              First Name
              <Field name="first_name" type="text" id="first_name" />
            </label>

            <label>
              Last Name
              <Field name="last_name" type="text" id="last_name" />
            </label>
          </div>

          <label>Bio </label>
          <Field name="description" type="text" id="description" />

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

          <Button rounded primary type="submit">
            Update Profile
          </Button>
        </Form>
      </div>
    </Formik>
  );
}

export default EditProfile;

{
  /* <div>
<h4>General</h4>
<label>Email</label>

<Input />
</div>

<div className={Classes.box_container}>
<label>
  Old password
  <Field name="password" type="password" />
</label>

<label>
  Password
  <Input type="password" />
</label>
</div>
<Button rounded primary>
Change
</Button> */
}
