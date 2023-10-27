import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

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
