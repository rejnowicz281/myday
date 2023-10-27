import { formatDate, isOverdue } from "@/utils/date";

export default function DueDateDisplay({ dueDate }) {
    return (
        <span>
            {isOverdue(dueDate) ? "Overdue: " : "Due: "}
            {formatDate(dueDate)}
        </span>
    );
}
