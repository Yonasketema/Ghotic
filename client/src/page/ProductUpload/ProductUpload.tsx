import axios, { AxiosResponse } from "axios";
import React from "react";
import Classes from "./productUpload.module.css";

function ProductUpload(props: { token?: string }) {
  console.log("++++", props.token);

  const [img, setImg] = React.useState("");

  function imageHandler(e: any): void {
    const reader: any = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const { title, description, images } = event.target.elements;

    const formData = new FormData();

    formData.append("title", title.value);
    formData.append("description", `${description.value}`);

    formData.append("category", "1");
    formData.append("images", images.files[0]);

    axios
      .post(
        `${process.env.REACT_APP_PRODUCTS}`,

        formData,
        {
          headers: {
            Authorization: `JWT ${props.token}`,
          },
        }
      )
      .then((res) => res.data);
  }

  return (
    <div className={Classes.productupload_container}>
      <form onSubmit={handleSubmit} style={{ width: "80%", margin: "0 auto" }}>
        <div className={Classes.upload_nav}>
          <button type="button" className={Classes.btn_cancel}>
            cancel
          </button>

         {true ?  <button   className={Classes.btn_upload}>Upload</button> : <button type="button" className={Classes.btn_upload}>Edit Profile</button>}
        </div>
        {true && <p>put your username fisrt</p>}
        <h1 className="heading">Add your Image</h1>

        <div className={Classes.upload_text}>
          <input
            type="text"
            placeholder="Give me a name"
            id="title"
            className={Classes.input_title}
          />

          <input
            placeholder="Write what went into this shot, and anything else you’d like to mention"
            type="text"
            id="description"
            className={Classes.input_what}
          />
        </div>

        <label htmlFor="images">
          <div className={Classes.img_container}>
            {img && (
              <button
                onClick={() => {
                  setImg("");
                  window.location.reload();
                }}
                className={Classes.img_delete_btn}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            )}
            {img ? (
              <img src={img} alt="" id="img" className="img" />
            ) : (
              <p>1600x1200 or higher recommended. Max 10MB </p>
            )}
          </div>
        </label>

        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          name="image-upload"
          id="images"
          onChange={imageHandler}
        />
      </form>
    </div>
  );
}

export default ProductUpload;
