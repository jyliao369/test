import "./App.css";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get(`https://thawing-brook-00510.herokuapp.com/`, {}).then(
      (response) => {
        // console.log("hello");
        console.log(response);
      }
    );
  }, []);

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
