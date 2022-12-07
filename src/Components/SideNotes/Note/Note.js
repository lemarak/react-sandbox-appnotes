import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  return <div>{note.title}</div>;
};

export default Note;
