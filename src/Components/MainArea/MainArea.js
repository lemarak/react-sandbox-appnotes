import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./MainArea.css";

const MainArea = () => {
  const [inpInfo, setInpInfos] = useState({
    title: "",
    subtitle: "",
    body: "",
  });
  const [inpModify, setInpModify] = useState({
    title: "",
    subtitle: "",
    body: "",
    toggle: true,
  });
  const [validation, setValidation] = useState(true);
  const dispatch = useDispatch();

  const selected = useSelector((state) => state.selectedReducer.selectedNote);

  useEffect(() => {
    setInpModify(selected);
  }, [selected]);

  const updateInputs = (e) => {
    const actualInp = e.target.getAttribute("id");
    if (selected.toggle) {
      const newObjState = { ...inpModify, [actualInp]: e.target.value };
      setInpModify(newObjState);
    } else {
      const newObjState = { ...inpInfo, [actualInp]: e.target.value };
      setInpInfos(newObjState);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (selected.toggle) {
      if (inpModify.title.length < 1) {
        setValidation(false);
        return;
      }
      setValidation(true);
      dispatch({
        type: "UPDATENOTE",
        payload: {
          ...inpModify,
        },
      });
      dispatch({
        type: "RESETNOTE",
      });
      setInpModify({
        title: "",
        subtitle: "",
        body: "",
      });
    } else {
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
    }
  };

  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Le Titre</label>
        <input
          onChange={updateInputs}
          value={inpModify.toggle ? inpModify.title : inpInfo.title}
          type="text"
          id="title"
        />
        {!validation && (
          <span className="info-validation">Veuillez renseigner le titre</span>
        )}

        <label htmlFor="subtitle">Le Sous-Titre</label>
        <input
          onChange={updateInputs}
          value={inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
          type="text"
          id="subtitle"
        />

        <label htmlFor="txtbody">Votre texte</label>
        <textarea
          onChange={updateInputs}
          value={inpModify.toggle ? inpModify.body : inpInfo.body}
          id="body"
          placeholder="Votre texte..."
        ></textarea>
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default MainArea;
