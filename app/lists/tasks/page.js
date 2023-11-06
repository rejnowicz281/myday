import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";
import css from "../page.module.css";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <TasksProvider tasks={tasks}>
                    <div className={css.main}>
                        <h1>Tasks</h1>
                        <AddTaskButton />
                        <Tasks />
                    </div>
                </TasksProvider>
            </div>
        </div>
    );
}
