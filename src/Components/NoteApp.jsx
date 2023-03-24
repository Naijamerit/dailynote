import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

const NoteApp = () => {
   const [notes, setNotes] = useState(localStorage.getItem("notes") == null ? [] : JSON.parse(localStorage.getItem("notes")));

   const [searchText, setSearchText] = useState("");

   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      window.localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes]);

   const addNote = (text) => {
      const date = new Date();
      const newNote = {
         id: nanoid(),
         text: text,
         date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
   };

   const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
   };

   return (
      <div className={`${darkMode && "dark-mode"}`}>
         <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />

            <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
            <Footer />
         </div>
      </div>
   );
};

export default NoteApp;
