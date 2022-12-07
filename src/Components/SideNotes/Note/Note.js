import React from "react";
import "./Note.css";
import RemoveIcon from "./remove.svg";
import EditIcon from "./edit.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch({
      type: "DELETENOTE",
      payload: note.id,
    });
  };

  const editNote = () => {
    dispatch({
      type: "SEENOTE",
      payload: note,
    });
  };

  return (
    <li className="txt-note-prev">
      <div className="bloc-note-left">
        <Link to={{ pathname: `/displaynote/${note.title}` }}>
          <p> {note.title}</p>
          <p>{note.subtitle}</p>
        </Link>
      </div>
      <div className="bloc-note-right">
        <button onClick={deleteNote}>
          <img src={RemoveIcon} alt="remove icon" />
        </button>
        <Link to="/edit">
          <button onClick={editNote}>
            <img src={EditIcon} alt="edit icon" />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default Note;
