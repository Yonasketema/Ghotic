import React from "react";
import Classes from "./productUpload.module.css";

function ProductUpload() {
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

  return (
    <div className={Classes.productupload_container}>
      <div className={Classes.upload_nav}>
        <button className={Classes.btn_cancel}>cancel</button>

        <button className={Classes.btn_upload}>Upload</button>
      </div>
      <h1 className="heading">Add your Image</h1>

      <div className={Classes.upload_text}>
        {/*<label htmlFor="weekday-3" placeholder='give'>title</label>*/}
        <input
          type="text"
          placeholder="Give me a name"
          className={Classes.input_title}
        />
        {/*<label htmlFor="weekday-3" >dis</label>*/}
        <input
          placeholder="Write what went into this shot, and anything else you’d like to mention"
          type="text"
          className={Classes.input_what}
        />
      </div>

      <label htmlFor="img-input">
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
        id="img-input"
        onChange={imageHandler}
      />
    </div>
  );
}

export default ProductUpload;
