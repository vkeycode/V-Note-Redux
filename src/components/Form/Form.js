import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.scss";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const initialNote = {
  title: "",
  note: "",
  color: "red",
};

const Form = () => {
  const [newNote, setNewNote] = useState(initialNote);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newNote.title && newNote.note) {
      dispatch(addNote(newNote));
      setNewNote(initialNote);
    }else{
      alert("Fill in all fields")
    }
  };

  const handleChange = (event) => {
    setNewNote({
      ...newNote,
      id: nanoid(5),
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className={style.title}
          name="title"
          value={newNote.title}
          onChange={handleChange}
        />
        <label>Note</label>
        <textarea
          className={style.note}
          name="note"
          value={newNote.note}
          onChange={handleChange}
        />
        <div className={style.content}>
          <div className={style.colors}>
            <div className="red">
              <input
                type="radio"
                name="color"
                value="red"
                checked={newNote.color === "red" && "checked"}
                onChange={handleChange}
              />
            </div>
            <div className="green">
              <input
                type="radio"
                name="color"
                value="green"
                onChange={handleChange}
              />
            </div>
            <div className="blue">
              <input
                type="radio"
                name="color"
                value="blue"
                onChange={handleChange}
              />
            </div>
            <div className="pink">
              <input
                type="radio"
                name="color"
                value="pink"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
