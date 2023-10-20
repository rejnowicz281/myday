import { updateTaskName, updateTaskNote, updateTaskRepeat } from "@actions/tasks";
import Completed from "./Completed";
import DeleteButton from "./DeleteButton";
import EditableName from "./EditableName";
import MyDay from "./MyDay";
import Note from "./Note";
import Repeat from "./Repeat";

export default function Task({ listId, task }) {
    return (
        <div>
            <EditableName action={updateTaskName} name={task.name} listId={listId} taskId={task.id} />
            <Note action={updateTaskNote} listId={listId} taskId={task.id} note={task.note} />
            <DeleteButton listId={listId} taskId={task.id} />
            <div>Created at: {task.createdAt.toString()}</div>
            <div>Last updated: {task.updatedAt.toString()}</div>
            <Completed listId={listId} taskId={task.id} completed={task.completed} />
            <MyDay listId={listId} taskId={task.id} my_day={task.my_day} />
            <Repeat action={updateTaskRepeat} listId={listId} taskId={task.id} repeat={task.repeat} />
            <div>Priority: {task.priority}</div>
            {task.due_date && <div>Due: {task.due_date.toString()}</div>}
            <hr />
        </div>
    );
}
