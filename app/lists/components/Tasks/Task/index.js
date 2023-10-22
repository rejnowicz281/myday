import {
    updateTaskDueDate,
    updateTaskName,
    updateTaskNote,
    updateTaskPriority,
    updateTaskRepeat,
} from "@actions/tasks";
import { formatDate } from "@utils/date";
import Link from "next/link";
import Completed from "./Completed";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import MyDay from "./MyDay";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";

export default function Task({ task, showList }) {
    return (
        <div>
            <EditableName action={updateTaskName} name={task.name} taskId={task.id} />
            <Note action={updateTaskNote} taskId={task.id} note={task.note} />
            <DeleteButton taskId={task.id} />
            {showList && (
                <div>
                    List:
                    {task.list ? (
                        <Link href={`/lists/${task.list.id}`}>{task.list.name}</Link>
                    ) : (
                        <Link href="/lists/tasks">Tasks</Link>
                    )}
                </div>
            )}
            <div>Created: {formatDate(task.createdAt)}</div>
            <div>Last updated: {formatDate(task.updatedAt)}</div>
            <Completed taskId={task.id} completed={task.completed} />
            <MyDay taskId={task.id} my_day={task.my_day} />
            <Repeat action={updateTaskRepeat} taskId={task.id} repeat={task.repeat} />
            <Priority priority={task.priority} action={updateTaskPriority} taskId={task.id} />
            <DueDate dueDate={task.due_date} action={updateTaskDueDate} taskId={task.id} />
            <hr />
        </div>
    );
}
