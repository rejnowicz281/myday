"use client";

import { useEffect, experimental_useOptimistic as useOptimistic, useRef, useState } from "react";

export default function ToggleEditable({ action, display, inputClass, displayClass, defaultDisplay, inputType }) {
    const inputRef = useRef(null);
    const [input, setInput] = useOptimistic(display);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (editing) inputRef.current.focus();
    }, [editing]);

    useEffect(() => {
        const submitOnMouseClick = (e) => {
            if (!inputRef.current.contains(e.target)) handleSubmit();
        };

        const submitOnEnter = (e) => {
            if (e.key === "Enter") handleSubmit();
        };

        if (editing) {
            document.addEventListener("click", submitOnMouseClick);
            document.addEventListener("keydown", submitOnEnter);
        }

        return () => {
            document.removeEventListener("click", submitOnMouseClick);
            document.removeEventListener("keydown", submitOnEnter);
        };
    }, [editing, input]);

    function handleSubmit() {
        setEditing(false);

        if (input == "" || input == display) setInput(display);
        else action(input);
    }

    if (editing)
        return inputType == "textarea" ? (
            <textarea
                className={inputClass}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
            ></textarea>
        ) : (
            <input
                className={inputClass}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
            />
        );
    else
        return (
            <button className={displayClass} onClick={() => setEditing(true)}>
                {display ? display : defaultDisplay}
            </button>
        );
}
