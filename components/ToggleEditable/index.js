"use client";

import { useEffect, useRef, useState } from "react";

export default function ToggleEditable({
    action,
    display,
    inputClass,
    displayClass,
    defaultDisplay,
    inputType,
    required = true,
}) {
    const inputRef = useRef(null);
    const submitRef = useRef(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (inputRef.current) inputRef.current.value = display;
    }, [display]);

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
    }, [editing, inputRef?.current?.value]);

    function handleSubmit() {
        submitRef.current.click();
        setEditing(false);
    }

    function handleAction(formData) {
        const input = formData.get("input");

        if ((required && input === "") || input === display) return;

        action(input);
    }

    if (editing)
        return (
            <form action={handleAction}>
                {inputType == "textarea" ? (
                    <textarea className={inputClass} defaultValue={display} name="input" ref={inputRef}></textarea>
                ) : (
                    <input className={inputClass} defaultValue={display} type="text" name="input" ref={inputRef} />
                )}

                <button type="submit" ref={submitRef} className="hidden"></button>
            </form>
        );
    else
        return (
            <button className={displayClass} onClick={() => setEditing(true)}>
                {display ? display : defaultDisplay}
            </button>
        );
}
