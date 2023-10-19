import Completed from "./Completed";
import MyDay from "./MyDay";

export default function Task({ listId, task }) {
    return (
        <div>
            <div>Name: {task.name}</div>
            <div>Created at: {task.createdAt.toString()}</div>
            <div>Last updated: {task.updatedAt.toString()}</div>
            <Completed listId={listId} taskId={task.id} completed={task.completed} />
            <MyDay listId={listId} taskId={task.id} my_day={task.my_day} />
            {task.due_date && <div>Due: {task.due_date.toString()}</div>}
            {task.repeat && <div>Repeating: every {task.repeat} day(s)</div>}
            {task.priority && <div>Priority: {task.priority}</div>}
            {task.note && <div>Note: {task.note}</div>}
            <hr />
        </div>
    );
}
