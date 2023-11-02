import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import css from "./page.module.css";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <TasksProvider tasks={tasks}>
                    <div class={css.main}>
                        <h1>Tasks</h1>
                        <AddTask />
                        <Tasks />
                    </div>
                </TasksProvider>
            </div>
        </div>
    );
}
