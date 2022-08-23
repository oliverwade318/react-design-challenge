import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
