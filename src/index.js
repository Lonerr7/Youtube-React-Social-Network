import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogs = [
  { id: 1, name: "Vanya" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Dima" },
  { id: 4, name: "VaDick" },
  { id: 5, name: "Ilya" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Luv u" },
];

const posts = [
  { id: 1, post: "Hi, how are u?", likesCount: 20 },
  { id: 2, post: "It's my first post", likesCount: 15 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
