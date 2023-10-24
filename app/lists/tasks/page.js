import { getListlessTasks } from "@actions/lists";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { TasksProvider } from "../providers/TasksContext";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <>
            <h1>Tasks</h1>
            <TasksProvider tasks={tasks}>
                <AddTask />
                <Tasks />
            </TasksProvider>
        </>
    );
}
