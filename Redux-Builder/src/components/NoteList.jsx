import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/actions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <div style={{ margin: "20px", textAlign: "center",display:"flex" }}>
      {notes.map((note, index) => (
        <div
          key={index}
          style={{
            margin: "10px auto",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p>{note}</p>
          <button
            onClick={() => handleDelete(index)}
            style={{
              marginTop: "10px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
