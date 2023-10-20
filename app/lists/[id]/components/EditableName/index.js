"use client";

import { useState } from "react";
import css from "./index.module.css";

export default function EditableName({ action, name, listId }) {
    const [nameInput, setNameInput] = useState(name);
    const [nameDisplay, setNameDisplay] = useState(name);
    const [editing, setEditing] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);
        if (nameInput != "") {
            setNameDisplay(nameInput);
            action(nameInput, listId);
        } else {
            setNameInput(nameDisplay);
        }
    }

    if (editing)
        return (
            <form onSubmit={handleSubmit}>
                <input
                    className={css.nameInput}
                    type="text"
                    name="name"
                    placeholder="Type in name here"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <button>Update Name</button>
            </form>
        );
    else
        return (
            <button className={css.nameDisplay} onClick={() => setEditing(true)}>
                {nameDisplay}
            </button>
        );
}
