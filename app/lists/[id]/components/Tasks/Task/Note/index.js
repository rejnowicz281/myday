"use client";

import { useState } from "react";
import css from "./index.module.css";

export default function Note({ action, note, listId, taskId }) {
    const [noteInput, setNoteInput] = useState(note);
    const [noteDisplay, setNoteDisplay] = useState(note);
    const [editing, setEditing] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);
        if (noteInput != "") {
            setNoteDisplay(noteInput);
            action(noteInput, listId, taskId);
        } else {
            setNoteInput(noteDisplay);
        }
    }

    if (editing)
        return (
            <form onSubmit={handleSubmit}>
                <input
                    className={css.noteInput}
                    type="text"
                    name="note"
                    placeholder="Type in note here"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                />
                <button>Update note</button>
            </form>
        );
    else
        return (
            <button className={css.noteDisplay} onClick={() => setEditing(true)}>
                {note ? noteDisplay : "Note"}
            </button>
        );
}
