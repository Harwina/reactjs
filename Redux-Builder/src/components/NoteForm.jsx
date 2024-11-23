import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.trim()) {
      dispatch(addNote(note));
      setNote("");
    }
  };

  return (
    <div className="text-area" style={{ textAlign: "center", }}>
      <textarea
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "300px",
          height: "100px",
          borderRadius: "5px",
          padding: "10px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      ></textarea>
      <div>
        <button onClick={handleAddNote} style={{ marginTop: "10px", padding: "5px 10px" }}>
        <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
