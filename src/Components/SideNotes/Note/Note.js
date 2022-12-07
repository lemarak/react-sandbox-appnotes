import React from "react";
import "./Note.css";
import RemoveIcon from "./remove.svg";
import EditIcon from "./edit.svg";
import { useDispatch } from "react-redux";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch({
      type: "DELETENOTE",
      payload: note.id,
    });
  };

  return (
    <li className="txt-note-prev">
      <div className="bloc-note-left">
        <p> {note.title}</p>
        <p>{note.subtitle}</p>
      </div>
      <div className="bloc-note-right">
        <button onClick={deleteNote}>
          <img src={RemoveIcon} alt="remove icon" />
        </button>
        <button
        // onClick={editNote}
        >
          <img src={EditIcon} alt="edit icon" />
        </button>
      </div>
    </li>
  );
};

export default Note;
