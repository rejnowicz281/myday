"use client";

import { experimental_useOptimistic as useOptimistic, useState } from "react";

export default function Options({ taskId, action, repeat, setRepeat }) {
    const [input, setInput] = useOptimistic(repeat);
    const [everyX, setEveryX] = useState(1);

    function handleInputChange(e) {
        let value = e.target.value;

        if (value == "") setInput(0);
        else if (value.toString().length > 1 && value.toString()[0] == "0") setInput(value.substring(1));
        else if (value > -1) setInput(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (input > -1 && everyX > 0) {
            const final = input * everyX;

            setRepeat(final);
            action(final, taskId);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={input} placeholder="every x" onChange={handleInputChange} />
            <select
                onChange={(e) => {
                    setEveryX(e.target.value);
                    console.log(e.target.value);
                }}
            >
                <option value={1}>Days</option>
                <option value={7}>Weeks</option>
                <option value={30}>Months</option>
                <option value={365}>Years</option>
            </select>
            <button>Save</button>
        </form>
    );
}
