import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, addNoteHandler, deleteHandler }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteHandler={deleteHandler}
        />
      ))}
      <AddNote addNoteHandler={addNoteHandler} />
    </div>
  );
};

export default NoteList;
