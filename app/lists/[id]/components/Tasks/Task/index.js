import { updateTaskName, updateTaskNote } from "@actions/tasks";
import Completed from "./Completed";
import EditableName from "./EditableName";
import MyDay from "./MyDay";
import Note from "./Note";

export default function Task({ listId, task }) {
    return (
        <div>
            <EditableName action={updateTaskName} name={task.name} listId={listId} taskId={task.id} />
            <Note action={updateTaskNote} listId={listId} taskId={task.id} note={task.note} />
            <div>Created at: {task.createdAt.toString()}</div>
            <div>Last updated: {task.updatedAt.toString()}</div>
            <Completed listId={listId} taskId={task.id} completed={task.completed} />
            <MyDay listId={listId} taskId={task.id} my_day={task.my_day} />
            {task.due_date && <div>Due: {task.due_date.toString()}</div>}
            {task.repeat && <div>Repeating: every {task.repeat} day(s)</div>}
            {task.priority && <div>Priority: {task.priority}</div>}
            <hr />
        </div>
    );
}
