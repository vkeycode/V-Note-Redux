import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.scss";
import { deleteNote } from "../../redux/notes/notesSlice";
const List = () => {
  const [search, setSearch] = useState();
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete ${title}`)) {
      dispatch(deleteNote(id));
    } else {
      return false;
    }
  };

  return (
    <div className={style.list}>
      <div className={style.search}>
        <input
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      {notes
        .filter((note) => {
          return search.toLowerCase() === ""
            ? note
            : note.title.toLowerCase().includes(search);
        })
        .map((item) => (
          <div className={style.note + " " + item.color} key={item.id}>
            <h4>
              {item.title}
              <button onClick={() => handleDelete(item.id, item.title)}>
                X
              </button>
            </h4>
            <p>{item.note}</p>
          </div>
        ))}
    </div>
  );
};

export default List;
