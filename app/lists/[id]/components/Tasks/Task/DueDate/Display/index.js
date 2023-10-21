import { formatDate, isOverdue } from "@utils/date";

export default function Display({ dueDate }) {
    return (
        <span>
            {isOverdue(dueDate) ? "Overdue: " : "Due: "}
            {formatDate(dueDate)}
        </span>
    );
}
