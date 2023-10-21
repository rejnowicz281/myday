import { createTask } from "@actions/tasks";
import AddTask from "./AddTask";
import Task from "./Task";

export default function Tasks({ listId, tasks }) {
    return (
        <>
            <AddTask listId={listId} action={createTask} />
            {tasks.map((task) => (
                <Task key={task.id} listId={listId} task={task} />
            ))}
        </>
    );
}
