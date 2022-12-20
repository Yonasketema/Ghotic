import Classes from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={Classes.sidebar_container}>
      <ul>
        <h4>Categories</h4>
        <li>
          {" "}
          <input
            type="checkbox"
            id="weekday-1"
            name="weekday-1"
            value="Friday"
          />
          <label htmlFor="weekday-1">photography</label>
        </li>

        <li>
          {" "}
          <input
            type="checkbox"
            id="weekday-2"
            name="weekday-2"
            value="Saturday"
          />
          <label htmlFor="weekday-2">painting</label>{" "}
        </li>

        <li>
          {" "}
          <input
            type="checkbox"
            id="weekday-3"
            name="weekday-3"
            value="Sunday"
          />
          <label htmlFor="weekday-3">Illustration</label>{" "}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

<form></form>;
