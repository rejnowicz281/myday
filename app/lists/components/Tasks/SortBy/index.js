"use client";

import TasksContext from "@providers/TasksContext";
import { useContext } from "react";

export default function SortBy() {
    const { setCurrentSortKey, setCurrentSortOrder, currentSortKey, currentSortOrder } = useContext(TasksContext);

    function handleOrderChange() {
        setCurrentSortOrder(currentSortOrder == "Desc" ? "Asc" : "Desc");
    }

    function handleKeyChange(e) {
        setCurrentSortKey(e.target.value);
    }

    return (
        <div>
            Sort by:
            <select onChange={handleKeyChange} defaultValue={currentSortKey}>
                <option value="created_at">Created At</option>
                <option value="due_date">Due Date</option>
                <option value="priority">Priority</option>
                <option value="complete">Complete</option>
                <option value="name">Name</option>
            </select>
            <button onClick={handleOrderChange}>{currentSortOrder}</button>
        </div>
    );
}
