"use client";

export default function SortBy({ sortKey, setSortKey, sortOrder, setSortOrder }) {
    function handleOrderChange() {
        setSortOrder(sortOrder == "Descending" ? "Ascending" : "Descending");
    }

    function handleKeyChange(e) {
        setSortKey(e.target.value);
    }

    return (
        <div className="flex gap-3">
            <div>Sort by</div>
            <div className="flex gap-3 items-center">
                <button className="font-bold hover:text-gray-500 cursor-default" onClick={handleOrderChange}>
                    {sortOrder}
                </button>
                <select
                    className="font-bold bg-inherit outline-none hover:text-gray-500"
                    onChange={handleKeyChange}
                    defaultValue={sortKey}
                >
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
