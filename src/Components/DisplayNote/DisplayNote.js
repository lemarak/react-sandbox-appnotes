import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./DisplayNote.css";

const DisplayNote = () => {
  const { id } = useParams();
  const { notes } = useSelector((state) => state.notesReducer);

  const indexNote = notes.findIndex((obj) => obj.title === id);
  const note = notes[indexNote] || {};

  return (
    <div className="display-txt-zone">
      <h2 className="title-display"> Votre note : {note.title}</h2>
      <span className="subtitle-display">{note.subtitle}</span>
      <p className="txt-display">{note.body}</p>
    </div>
  );
};

export default DisplayNote;
