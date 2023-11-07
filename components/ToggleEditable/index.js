"use client";

import { useEffect, experimental_useOptimistic as useOptimistic, useRef, useState } from "react";

export default function ToggleEditable({
    action,
    display,
    inputClass,
    submitClass,
    submitContent,
    displayClass,
    formClass,
    defaultDisplay,
    inputType,
}) {
    const inputRef = useRef(null);
    const [input, setInput] = useOptimistic(display);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (editing) inputRef.current.focus();
    }, [editing]);

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);

        if (input == "") setInput(display);
        else action(input);
    }

    if (editing)
        return (
            <form className={formClass} onSubmit={handleSubmit}>
                {inputType == "textarea" ? (
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
