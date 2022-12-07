import React from "react";
import { useEffect } from "react";
import "./MainArea.css";

const MainArea = () => {
  useEffect(() => {}, []);

  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form>
        <label htmlFor="title">Le Titre</label>
        <input type="text" id="title" />
        <label htmlFor="subtitle">Le Sous-Titre</label>
        <input type="text" id="subtitle" />
        <label htmlFor="txtbody">Votre texte</label>
        <textarea id="txtbody" placeholder="Votre texte..."></textarea>
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default MainArea;
