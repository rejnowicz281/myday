"use client";

import { experimental_useOptimistic as useOptimistic, useState } from "react";

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
    const [input, setInput] = useOptimistic(display);
    const [editing, setEditing] = useState(false);

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
