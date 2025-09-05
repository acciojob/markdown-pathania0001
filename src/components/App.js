import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app">
      <h1>📑 React Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
};

export default App;
