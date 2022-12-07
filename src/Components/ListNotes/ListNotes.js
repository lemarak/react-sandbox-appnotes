import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListNotes.css";

const ListNotes = () => {
  const { notes } = useSelector((state) => state.notesReducer);

  return (
    <div className="container-content">
      <h2>Voici vos notes</h2>
      <ul className="notes-list-card">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={{
              pathname: `/displayNote/${note.title}`,
            }}
          >
            <li>
              <h2>{note.title}</h2>
              <p>{note.subtitle}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListNotes;
