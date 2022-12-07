import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./MainArea.css";

const MainArea = () => {
  const [inpInfo, setInpInfos] = useState({
    title: "",
    subtitle: "",
    body: "",
  });
  const [validation, setValidation] = useState(true);
  const dispatch = useDispatch();
  const allInp = useRef([]);

  const addInp = (el) => {
    if (el && !allInp.current.includes(el)) {
      allInp.current.push(el);
    }
  };

  useEffect(() => {}, []);

  const updateInputs = (e) => {
    const actualInp = e.target.getAttribute("id");
    const newObjState = { ...inpInfo, [actualInp]: e.target.value };
    setInpInfos(newObjState);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (inpInfo.title.length < 1) {
      setValidation(false);
      return;
    }

    setValidation(true);
    dispatch({
      type: "ADDNOTE",
      payload: {
        ...inpInfo,
        id: uuidv4(),
      },
    });

    setInpInfos({
      title: "",
      subtitle: "",
      body: "",
    });
  };

  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Le Titre</label>
        <input
          onChange={updateInputs}
          value={inpInfo.title}
          ref={addInp}
          type="text"
          id="title"
        />
        {!validation && (
          <span className="info-validation">Veuillez renseigner le titre</span>
        )}

        <label htmlFor="subtitle">Le Sous-Titre</label>
        <input
          onChange={updateInputs}
          value={inpInfo.subtitle}
          ref={addInp}
          type="text"
          id="subtitle"
        />

        <label htmlFor="txtbody">Votre texte</label>
        <textarea
          onChange={updateInputs}
          value={inpInfo.body}
          ref={addInp}
          id="body"
          placeholder="Votre texte..."
        ></textarea>
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default MainArea;
