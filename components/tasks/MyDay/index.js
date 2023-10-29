import { updateTaskMyDay } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function MyDay({ taskId, my_day }) {
    const { setMyDay } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();
        setMyDay(taskId, !my_day);
        updateTaskMyDay(taskId, !my_day);
    }

    return (
        <div>
            My Day:
            <button className={css.button} onClick={handleAction}>
                {my_day.toString()}
            </button>
        </div>
    );
}
