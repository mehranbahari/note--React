import { useState } from "react";

const AddNote = ({ addNoteHandler }) => {
  const [noteText, setNoteText] = useState("");
  const charachterLimit = 200;

  const changeHandler = (e) => {
    if (charachterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handlerSaveClick = (e) => {
    if (noteText.trim() !== "") {
      addNoteHandler(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        placeholder="Type to add note..."
        value={noteText}
        onChange={changeHandler}
      ></textarea>
      <div className="note-footer">
        <small>{charachterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handlerSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
