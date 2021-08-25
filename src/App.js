import logo from "./logo.svg";
import "./App.css";
import SetStateDepth1 from "./Components/SetStateDepth1";
import SetStateDepth2 from "./Components/SetStateDepth2";

function App() {
  const name = "Arafat";
  const isLogged = true;
  return (
    <>
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h2>Hello {isLogged ? name : "World"}</h2>  */}
        {/* {!isLogged && <h2>Hello World</h2>} */}
        {/* {isLogged && <h2>Hello {name}</h2>} */}
        {/* <p>Today is {new Date().toDateString()}</p> */}
        {/* </header> */}
        {/* <MountingP /> */}
        {/* <SetStateDepth1 /> */}
        <SetStateDepth2 />
      </div>
    </>
  );
}

export default App;
