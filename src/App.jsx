import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "18/11/2022",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "07/02/2022",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "10.02/2022",
    },
    {
      id: nanoid(),
      text: "this is my new note",
      date: "07.02/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  ////////local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-date"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-date", JSON.stringify(notes));
  }, [notes]);

  const addNoteHandler = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteHandler = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <div className="container">
      <Header darkMode={darkMode} handelToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
        addNoteHandler={addNoteHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
