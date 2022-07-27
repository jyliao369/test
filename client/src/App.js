import "./App.css";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get(`http://localhost:3001/`, {}).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
