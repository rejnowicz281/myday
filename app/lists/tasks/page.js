import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";
import css from "../page.module.css";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <div className={css.container}>
            <TasksProvider tasks={tasks}>
                <div className={css["main-wrapper"]}>
                    <div className={css.main}>
                        <div className={css["main-top"]}>
                            <h1>Tasks</h1>
                            <AddTaskButton />
                        </div>
                        {tasks.length > 0 && <Tasks />}
                    </div>
                </div>
            </TasksProvider>
        </div>
    );
}
