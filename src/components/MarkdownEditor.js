import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello Markdown!");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ width: "50%", padding: "10px" }}
      />
      <div className="preview" style={{ width: "50%", padding: "10px" }}>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
