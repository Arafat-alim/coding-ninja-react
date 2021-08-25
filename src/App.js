import logo from "./logo.svg";
import "./App.css";
import MountingP from "./Components/MountingP";

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
        <MountingP />
      </div>
    </>
  );
}

export default App;
