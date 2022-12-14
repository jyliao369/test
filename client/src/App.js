import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const submit = (info) => {
    console.log(info.split(","));
    Axios.post(`https://thawing-brook-00510.herokuapp.com/addPost`, {
      title: info.split(",")[0],
      postBody: info.split(",")[1],
    }).then((response) => {
      console.log(response);
    });

    // Axios.post(`http://localhost:3001/addPost`, {
    //   title: info.split(",")[0],
    //   postBody: info.split(",")[1],
    // }).then((response) => {
    //   console.log(response);
    // });
  };

  const deletePost = (postID) => {
    // console.log(postID);
    Axios.delete(
      `https://thawing-brook-00510.herokuapp.com/deletePost/${postID}`,
      {}
    ).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get(`https://thawing-brook-00510.herokuapp.com/`, {}).then(
      (response) => {
        console.log("hello");
        setList(response.data.reverse());
      }
    );

    // Axios.get(`http://localhost:3001/`, {}).then(
    //   (response) => {
    //     // console.log("hello");
    //     console.log(response.data);
    //     setList(response.data);
    //   }
    // );
  }, []);

  return (
    <div className="App">
      <p>hello</p>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        <button
          value={[title, postBody]}
          onClick={(e) => submit(e.target.value)}
        >
          Submit
        </button>
      </div>
      <br />
      <div>
        {list.map((list) => (
          <div key={list.postID}>
            <p>title: {list.title}</p>
            <p>body: {list.postBody}</p>
            <button
              value={list.postID}
              onClick={(e) => deletePost(e.target.value)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
