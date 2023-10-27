"use client";

export default function SortBy({ sortKey, setSortKey, sortOrder, setSortOrder }) {
    function handleOrderChange() {
        setSortOrder(sortOrder == "Desc" ? "Asc" : "Desc");
    }

    function handleKeyChange(e) {
        setSortKey(e.target.value);
    }

    return (
        <div>
            Sort by:
            <select onChange={handleKeyChange} defaultValue={sortKey}>
                <option value="created_at">Created At</option>
                <option value="due_date">Due Date</option>
                <option value="priority">Priority</option>
                <option value="complete">Complete</option>
                <option value="name">Name</option>
            </select>
            <button onClick={handleOrderChange}>{sortOrder}</button>
        </div>
    );
}
