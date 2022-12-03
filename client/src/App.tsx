import "./App.css";
import Card from "./components/card/Card";
import SideBar from "./components/sidebar/SideBar";
import Screen from "./components/Screen";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",

          gap: "1rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <div>Gothic</div>

          <div>Home</div>
          <div>About</div>
        </nav>

        <div>
          {/*    <img  style={{
              width:"3rem",
              height:"3rem",
              borderRadius:"50%",
           }} src="https://picsum.photos/323/223"/>
*/}

          <button
            style={{
              padding: ".5rem 1.7rem",
              fontSize: "1rem",
              fontWeight: "700",
              backgroundColor: "#BBD915",
              border: "none",
              color: "#FFF",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: ".5rem 1.7rem",
              fontSize: "1rem",
              fontWeight: "700",
              backgroundColor: "#BBD915",
              border: "none",
              color: "#FFF",
              marginLeft: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            Signup
          </button>
        </div>
      </header>

      <div
        className="App"
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <SideBar />
        <div>
          {/*<Screen/>*/}

          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div style={{ height: "1rem" }}></div>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
