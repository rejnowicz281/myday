import { getMyDayList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";
import css from "../page.module.css";

export default async function MyDayPage() {
    const tasks = await getMyDayList();

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <TasksProvider tasks={tasks} showList={true}>
                    <div className={css.main}>
                        <div className={css["main-top"]}>
                            <h1>My Day</h1>
                            <AddTaskButton forceMyDay={true} />
                        </div>
                        {tasks.length > 0 && <Tasks />}
                    </div>
                </TasksProvider>
            </div>
        </div>
    );
}
