"use client";

import { useState } from "react";

export default function ToggleEditable({
    action,
    initial,
    inputClass,
    submitClass,
    submitContent,
    displayClass,
    defaultDisplay,
    inputType,
}) {
    const [input, setInput] = useState(initial);
    const [display, setDisplay] = useState(initial);
    const [editing, setEditing] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);
        if (input != "") {
            setDisplay(input);
            action();
        } else {
            setInput(display);
        }
    }

    if (editing)
        return (
            <form onSubmit={handleSubmit}>
                {inputType == "textarea" ? (
                    <textarea
                        className={inputClass}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                ) : (
                    <input
                        className={inputClass}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                )}
                <button className={submitClass}>{submitContent}</button>
            </form>
        );
    else
        return (
            <button className={displayClass} onClick={() => setEditing(true)}>
                {display ? display : defaultDisplay}
            </button>
        );
}
