import { formatDate, isOverdue } from "@/utils/date";

export default function DueDateDisplay({ dueDate }) {
    if (dueDate instanceof Date)
        return (
            <span>
                {isOverdue(dueDate) ? "Overdue " : "Due "}
                {formatDate(dueDate)}
            </span>
        );
    else return <span>No Due Date</span>;
}
