import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <div>
            <h1>Tasks</h1>
            <AddTask />
            <TasksProvider tasks={tasks}>
                <Tasks />
            </TasksProvider>
        </div>
    );
}
