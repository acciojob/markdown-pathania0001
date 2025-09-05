import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("### Welcome to Markdown Editor!\n\nStart typing...");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(text);
  }, [text]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your Markdown here..."
      />

      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
