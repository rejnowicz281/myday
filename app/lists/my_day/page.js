import { getMyDayList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import css from "./page.module.css";

export default async function MyDayPage() {
    const tasks = await getMyDayList();

    return (
        <div class={css.wrapper}>
            <div className={css.container}>
                <h1>My Day</h1>
                <AddTask forceMyDay={true} />
                <TasksProvider tasks={tasks} showList={true}>
                    <Tasks />
                </TasksProvider>
            </div>
        </div>
    );
}
