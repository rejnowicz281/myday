import { getListlessTasks } from "@actions/lists";
import { createTask } from "@actions/tasks";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <>
            <h1>Tasks</h1>
            <AddTask action={createTask} />
            <Tasks tasks={tasks} />
        </>
    );
}
