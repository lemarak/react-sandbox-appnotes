import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Note from "./Note/Note";
import "./SideNotes.css";

const SideNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const { notes } = useSelector((state) => state.notesReducer);

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const preventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <div className="notes-display">
      <h2>Mes Notes</h2>
      <form onSubmit={preventDefault}>
        <input type="text" id="search-notes" placeholder="Rechercher..." />
      </form>
      <ul className="notes-list">
        {notesList.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default SideNotes;
