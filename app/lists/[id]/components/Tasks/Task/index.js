import {
    updateTaskDueDate,
    updateTaskName,
    updateTaskNote,
    updateTaskPriority,
    updateTaskRepeat,
} from "@actions/tasks";
import { formatDate } from "@utils/date";
import Completed from "./Completed";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import MyDay from "./MyDay";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";

export default function Task({ listId, task }) {
    return (
        <div>
            <EditableName action={updateTaskName} name={task.name} listId={listId} taskId={task.id} />
            <Note action={updateTaskNote} listId={listId} taskId={task.id} note={task.note} />
            <DeleteButton listId={listId} taskId={task.id} />
            <div>Created: {formatDate(task.createdAt)}</div>
            <div>Last updated: {formatDate(task.updatedAt)}</div>
            <Completed listId={listId} taskId={task.id} completed={task.completed} />
            <MyDay listId={listId} taskId={task.id} my_day={task.my_day} />
            <Repeat action={updateTaskRepeat} listId={listId} taskId={task.id} repeat={task.repeat} />
            <Priority priority={task.priority} action={updateTaskPriority} listId={listId} taskId={task.id} />
            <DueDate dueDate={task.due_date} action={updateTaskDueDate} listId={listId} taskId={task.id} />
            <hr />
        </div>
    );
}
