"use client";
import css from "./index.module.css";

export default function SortBy({ sortKey, setSortKey, sortOrder, setSortOrder }) {
    function handleOrderChange() {
        setSortOrder(sortOrder == "Descending" ? "Ascending" : "Descending");
    }

    function handleKeyChange(e) {
        setSortKey(e.target.value);
    }

    return (
        <div className={css.container}>
            Sort by
            <div className={css.buttons}>
                <button className={css.button} onClick={handleOrderChange}>
                    {sortOrder}
                </button>
                <select className={css.button} onChange={handleKeyChange} defaultValue={sortKey}>
                    <option value="created_at">Created At</option>
                    <option value="due_date">Due Date</option>
                    <option value="priority">Priority</option>
                    <option value="complete">Complete</option>
                    <option value="name">Name</option>
                </select>
            </div>
        </div>
    );
}
